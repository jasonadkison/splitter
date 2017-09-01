import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store.js';
import Balance from './Balance.jsx';
import AccountsList from './AccountsList.jsx';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app-root">
          <h1>Splitter Lab</h1>

          <Balance />
          <AccountsList />
        </div>
      </Provider>
    );
  }
}
