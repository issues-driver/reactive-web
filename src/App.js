import React, { Component } from "react";
import "./App.css";
import Movie from "./component/Movie";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Movie />
      </main>
    );
  }
}

export default App;
