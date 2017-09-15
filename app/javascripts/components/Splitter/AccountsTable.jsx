import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AccountRow from './AccountRow';

class AccountsTable extends Component {
  static propTypes = {
    accounts: PropTypes.arrayOf(PropTypes.string).isRequired,
  };
  render() {
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th colSpan="15">
                Accounts
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.accounts.map(account => (
              <AccountRow key={account} address={account} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(state => {
  return {
    accounts: state.accounts,
  };
})(AccountsTable);
