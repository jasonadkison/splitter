import { combineReducers, createStore } from 'redux';

const accounts = (state = [], action) => {
  return state;
};

const reducers = combineReducers({
  accounts,
});

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
