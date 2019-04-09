import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = ({ onDelete, onLike, onSort, data, columns, sortColumn }) => {
  return (
    <table className="table table-light">
      <TableHeader onSort={onSort} columns={columns} sortColumn={sortColumn} />
      <TableBody
        onLike={onLike}
        onDelete={onDelete}
        data={data}
        cells={columns}
      />
    </table>
  );
};

export default Table;
