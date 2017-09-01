import React, { Component } from 'react';

export default class AccountsList extends Component {
  listAccounts() {
    return <li>Item 1</li>;
  }
  render() {
    return (
      <div id="accounts-list">
        <h2>Accounts</h2>
        <ul>
          {this.listAccounts()}
        </ul>
      </div>
    );
  }
}
