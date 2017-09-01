import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

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

const reducers = combineReducers({
  balance,
  accounts,
});

const middleware = applyMiddleware(thunk);

export default createStore(
  reducers,
  compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
