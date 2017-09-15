import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchStats } from 'actions';
import Stats from './Stats';
import LogsTable from './LogsTable';
import AccountsTable from './AccountsTable';

class Splitter extends Component {
  componentWillMount() {
    this.props.dispatch(fetchStats());
  }
  render() {
    return (
      <div>
        <Stats {...this.props.stats} />
        <LogsTable />
        <AccountsTable />
      </div>
    );
  }
}

Splitter.propTypes = {
  stats: PropTypes.shape().isRequired,
};

export default connect(state => ({
  stats: state.stats,
}))(Splitter);
