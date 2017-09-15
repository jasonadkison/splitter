import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import { fetchAccounts, watchContributions } from 'actions';
import Splitter from './Splitter';

export default class App extends Component {
  componentWillMount() {
    store.dispatch(fetchAccounts());
    store.dispatch(watchContributions());
  }
  render() {
    return (
      <Provider store={store}>
        <div className="row">
          <div className="col-md-6">
            <h1>Splitter Lab</h1>

            <ul>
              <li>there are 3 people: Alice, Bob and Carol</li>
              <li>we can see the balance of the Splitter contract on the web page</li>
              <li>whenever Alice sends ether to the contract, half of it goes to Bob and the other half to Carol</li>
              <li>we can see the balances of Alice, Bob and Carol on the web page</li>
              <li>we can send ether to it from the web page</li>
            </ul>

            <h2>Stretch goals:</h2>
            <ul>
              <li>add a kill switch to the whole contract</li>
              <li>make the contract a utility that can be used by David, Emma and anybody with an address</li>
              <li>cover potentially bad input data</li>
            </ul>

          </div>

          <div className="col-md-6">
            <Splitter />
          </div>

        </div>
      </Provider>
    );
  }
}
