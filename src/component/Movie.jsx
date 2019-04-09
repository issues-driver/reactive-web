import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/Pagination";
import { calculatePage } from "../utils/Paginate";
import Category from "./common/Category";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./MoviesTable";
import _ from "lodash";

class Movie extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 2,
    currentPageNo: 1,
    selectedGenre: 0,
    sortColumn: {}
  };

  componentDidMount() {
    const genres = [{ _id: 0, name: "All Genres" }, ...getGenres()];
    this.setState({
      movies: getMovies(),
      genres
    });
  }

  handleDelete = key => {
    let changedMovies = this.state.movies.filter(movie => movie._id !== key);
    this.setState({ movies: changedMovies });
    console.info(changedMovies);
  };

  handleLiked = ({ movie }) => {
    let movies = this.state.movies;
    let position = movies.indexOf(movie);
    let currentMovie = movies[position];
    movies[position].liked = currentMovie.liked === true ? false : true;
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPageNo: page });
  };

  handleGenreSelect = id => {
    this.setState({
      selectedGenre: id,
      currentPageNo: 1
    });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getData() {
    let {
      movies,
      pageSize,
      currentPageNo,
      selectedGenre,
      sortColumn
    } = this.state;

    let filtered = selectedGenre
      ? movies.filter(item => item.genre._id === selectedGenre)
      : movies;

    let sorted = _.orderBy(filtered, [sortColumn.field], [sortColumn.order]);
    let paginationMovies = calculatePage(sorted, currentPageNo, pageSize);

    return { totalCount: filtered.length, data: paginationMovies };
  }

  render() {
    let {
      movies,
      pageSize,
      currentPageNo,
      genres,
      selectedGenre,
      sortColumn
    } = this.state;

    let { length: count } = movies;
    const { totalCount, data } = this.getData();

    return count === 0 ? (
      <p>
        There are no movies in the database.
        <span className="badge badge-sm">Add</span>
      </p>
    ) : (
      <div className="row">
        <div className="col-2">
          <Category
            items={genres}
            selectedItem={selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <p>Showing {totalCount} movies in the database.</p>
          <MoviesTable
            movies={data}
            onLike={this.handleLiked}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
            sortColumn={sortColumn}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPageNo={currentPageNo}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movie;
