import React, { Component } from "react";

class MovieForm extends Component {
  state = {};
  render() {
    return <h1>movie id: {this.props.match.params.id}</h1>;
  }
}

export default MovieForm;
