import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = field => {
    console.log(field);
    const { onSort, sortColumn } = this.props;
    console.log(sortColumn);
    if (sortColumn.field === field) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.field = field;
      sortColumn.order = "asc";
    }
    onSort(sortColumn);
  };

  render() {
    const { columns } = this.props;
    return (
      <thead>
        <tr>
          {columns.map(column => (
            <th
              key={column.name || column.action}
              scope="col"
              onClick={() => this.raiseSort(column.field)}
            >
              {column.name}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
