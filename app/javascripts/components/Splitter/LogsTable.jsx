import React, { Component } from 'react';
import { connect } from 'react-redux';

class LogsTable extends Component {
  render() {
    return (
      <div>
        <h4>Contributions</h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>From</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {this.props.items.map(item => (
              <tr key={item.txn}>
                <td>
                  {item.from}&nbsp;
                  {this.props.alice === item.from ? <span className="label label-success">Alice</span> : null}
                </td>
                <td>{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(state => ({
  items: state.logs,
  alice: state.stats.alice,
}))(LogsTable);
