import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Stats extends Component {
  static propTypes = {
    address: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired,
    alice: PropTypes.string.isRequired,
    aliceBalance: PropTypes.string.isRequired,
    bob: PropTypes.string.isRequired,
    bobBalance: PropTypes.string.isRequired,
    bobSplit: PropTypes.string.isRequired,
    carol: PropTypes.string.isRequired,
    carolBalance: PropTypes.string.isRequired,
    carolSplit: PropTypes.string.isRequired,
  };
  render() {
    return (
      <div style={{marginTop: '2rem'}}>
        <dl className="dl-horizontal">
          <dt>Contract Address:</dt>
          <dd>{this.props.address}</dd>

          <dt>Contract Balance:</dt>
          <dd>{this.props.balance} wei</dd>
        </dl>

        <dl className="dl-horizontal">
          <dt>Alice Address:</dt>
          <dd>{this.props.alice}</dd>

          <dt>Alice Balance:</dt>
          <dd>{this.props.aliceBalance} wei</dd>
        </dl>

        <dl className="dl-horizontal">
          <dt>Bob Address:</dt>
          <dd>{this.props.bob}</dd>

          <dt>Bob Balance:</dt>
          <dd>{this.props.bobBalance} wei</dd>

          <dt>Bob Split:</dt>
          <dd>{this.props.bobSplit} wei</dd>
        </dl>

        <dl className="dl-horizontal">
          <dt>Carol Address:</dt>
          <dd>{this.props.carol}</dd>

          <dt>Carol Balance:</dt>
          <dd>{this.props.carolBalance} wei</dd>

          <dt>Carol Split:</dt>
          <dd>{this.props.carolSplit} wei</dd>
        </dl>
      </div>
    );
  }
}
