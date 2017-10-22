import React, { Component } from 'react';
import * as MoviesAPI from '../utils/MoviesAPI';
var localMovies = require('../data.json')

class ListMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      movies: [],
    }
  }
  componentDidMount() {
    this.setState({
      movies: localMovies.movies,
    })
  }
  render() {
    const { movies } = this.state

    return (
      <div className='list-movies'>
        <div className='list-books-content'>
          {movies !== undefined && movies && (movies.map((movie, index) =>
            <div>
              <p>id: {movie['id']}</p>
              <p>title: {movie['title']}</p>
              <p>year: {movie['year']}</p>
              <p>score: {movie['score']}</p>
              <p>director: {movie['director']}</p>
              <p>url: {movie['url']}</p>
              <p>synopsis: {movie['synopsis']}</p>
              <p>rating: {movie['rating']}</p>
              <p>runtime-in-minutes: {movie['runtime-in-minutes']}</p>
              <p>oscar-nominations: {movie['oscar-nominations']}</p>
              <p>oscar: {movie['oscar']}</p>
              <p>cover-url: {movie['cover-url']}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
export default ListMovies
