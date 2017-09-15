import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const initialStats = {
  address: '0x00',
  balance: '0',
  alice: '0x00',
  aliceBalance: '0',
  bob: '0x00',
  bobBalance: '0',
  bobSplit: '0',
  carol: '0x00',
  carolBalance: '0',
  carolSplit: '0',
};

const stats = (state = initialStats, action) => {
  if (action.type === 'RECEIVE_STATS') {
    return { ...state, ...action.stats };
  }
  return state;
};

const balance = (state = 0, action) => {
  if (action.type === 'RECEIVE_BALANCE') {
    return action.value;
  }
  return state;
};

const accounts = (state = [], action) => {
  if (action.type === 'RECEIVE_ACCOUNTS') {
    return [...action.accounts];
  }
  return state;
};

const logs = (state = [], action) => {
  if (action.type === 'RECEIVE_CONTRIBUTION_LOG') {
    return [...state, { from: action.from, amount: action.amount, txn: action.txn }];
  }
  return state;
};

const reducers = combineReducers({
  stats,
  balance,
  accounts,
  logs,
});

const middleware = applyMiddleware(thunk);

export default createStore(
  reducers,
  compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
