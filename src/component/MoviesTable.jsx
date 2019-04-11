import React from "react";
import Like from "./common/Like";
import Table from "./common/Table";
import { Link } from "react-router-dom";

const MoviesTable = props => {
  const columns = [
    {
      field: "title",
      name: "Title",
      action: "link",
      content: movie => <Link to={`/movie/${movie._id}`}>{movie.title}</Link>
    },
    {
      field: "genre.name",
      name: "Genre"
    },
    {
      field: "numberInStock",
      name: "Stock"
    },
    {
      field: "dailyRentalRate",
      name: "Rate"
    },
    {
      action: "like",
      content: movie => (
        <Like liked={movie.liked} onLiked={() => onLike({ movie })} />
      )
    },
    {
      action: "delete",
      content: movie => (
        <button
          className="btn btn-danger btn-sm"
          type="button"
          onClick={() => onDelete(movie._id)}
        >
          Delete
        </button>
      )
    }
  ];

  const { movies, onLike, onDelete, onSort, sortColumn } = props;

  console.log(movies);
  return (
    <Table
      onLike={onLike}
      onDelete={onDelete}
      onSort={onSort}
      data={movies}
      columns={columns}
      sortColumn={sortColumn}
    />
  );
};

export default MoviesTable;
