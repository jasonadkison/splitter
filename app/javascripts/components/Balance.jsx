import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBalance } from '../actions.js';

class Balance extends Component {
  componentDidMount() {
    this.props.dispatch(fetchBalance());
  }
  render() {
    return (
      <div id="balance">
        <h2>Current Balance: {this.props.balance} ETH</h2>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    balance: state.balance,
  };
})(Balance);
