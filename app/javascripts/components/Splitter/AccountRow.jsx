import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendContribution } from 'actions';

class AccountRow extends Component {
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
  onClickContribute = e => {
    e.preventDefault();
    this.props.dispatch(sendContribution(this.props.address, this.state.contribution))
      .then(() => {
        this.setState({ contribution: '' });
      });
  }
  render() {

    return (
      <tr>
        <td>
          {this.props.address}<br />
          {this.props.alice === this.props.address ? <span className="label label-success">Alice</span> : null}
        </td>
        <td>
          <input
            type="number"
            required
            min={1}
            value={this.state.contribution}
            onChange={this.onChangeContribution}
            placeholder="wei"
          />
        </td>
        <td>
          <input type="submit" value="Contribute" onClick={this.onClickContribute} />
        </td>
      </tr>
    );
  }
}

export default connect(state => ({
  alice: state.stats.alice,
}))(AccountRow);
