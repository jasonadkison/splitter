import React, { Component } from 'react';

export default class LogsTable extends Component {
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
                <td>{item.from}</td>
                <td>{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
