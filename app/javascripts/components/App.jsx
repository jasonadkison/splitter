import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store.js';
import AccountsList from './AccountsList.jsx';

export default class App extends Component {
  render() {
    return (
      <div className="app-root">
        <h1>Splitter Lab</h1>

        <Provider store={store}>
          <AccountsList />
        </Provider>
      </div>
    );
  }
}
