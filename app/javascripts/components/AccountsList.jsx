import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAccounts } from '../actions.js';

class AccountsList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchAccounts());
  }
  render() {
    return (
      <div id="accounts-list">
        <h2>Accounts</h2>
        <ul>
          {this.props.accounts.map(account => (
            <li key={account}>{account}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(state => {
  return {
    accounts: state.accounts,
  };
})(AccountsList);
