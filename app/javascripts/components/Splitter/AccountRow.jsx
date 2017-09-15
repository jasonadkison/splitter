import React, { Component } from 'react';
import PropTypes from 'prop-types';
import store from 'store';
import { sendContribution } from 'actions';

export default class AccountRow extends Component {
  static propTypes = {
    address: PropTypes.string.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      contribution: '',
    };
  }
  onChangeContribution = e => {
    e.preventDefault();
    if (parseInt(e.target.value, 10) === 0 && e.target.value !== '') return;
    this.setState({ contribution: e.target.value });
  }
  onSubmitContribution = e => {
    e.preventDefault();
    store.dispatch(sendContribution(this.props.address, this.state.contribution))
      .then(() => {
        this.setState({ contribution: '' });
      });
  }
  render() {
    return (
      <tr>
        <td>
          {this.props.address}
        </td>
        <td>
          <form onSubmit={this.onSubmitContribution}>
            <input
              type="number"
              required
              min={1}
              value={this.state.contribution}
              onChange={this.onChangeContribution}
              placeholder="wei"
            />
            <input type="submit" value="Contribute" />
          </form>
        </td>
      </tr>
    );
  }
}
