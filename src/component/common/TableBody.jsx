import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, cell) => {
    if (cell.action) {
      cell.content(item);
    } else {
      return _.get(item, cell.field);
    }
  };

  render() {
    const { data, cells } = this.props;
    return (
      <tbody>
        {data.map(item => (
          <tr key={item._id}>
            {cells.map((cell, index) => (
              <td key={item._id + (cell.name || cell.action)}>
                {this.renderCell(item, cell)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
