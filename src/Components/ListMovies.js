import React, { Component } from 'react'
import { Rating } from 'material-ui-rating'
import RaisedButton from 'material-ui/RaisedButton'

var localMovies = require('../data.json')

class ListMovies extends React.Component {
  constructor(props) {
    super(props)
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
      <div className='list-movies-part'>
        <div className='list-movies '>
          {movies !== undefined && movies && (movies.map((movie, index) =>
            <div className='list-movies-content clearfix'>
              <img className='list-movies-image' src={movie['cover-url']} alt='movie images'/>
              <a> {movie['id']} </a>
              <Link><a>title: {movie['title']}</a></Link>
              <div className='movies-score'>
                <Rating
                  value={movie['score'] * 10}
                  max={10}
                  onChange={(value) => console.log(`Rated with value ${value}`)}
                />
                <a>{movie['score'] * 10}/10</a>
              </div>
              <a>year: {movie['year']}</a>
              <a>score: {movie['score']}</a>
              <a>director: {movie['director']}</a>
              <a>url: {movie['url']}</a>
              <p>synopsis: {movie['synopsis']}</p>
              <a>rating: {movie['rating']}</a>
              <a>runtime-in-minutes: {movie['runtime-in-minutes']}</a>
              <a>oscar-nominations: {movie['oscar-nominations']}</a>
              <p>oscar: {movie['oscars']}</p>
              <RaisedButton className='clearfix' label="Default" />
            </div>
          ))}
        </div>
      </div>
    )
  }
}
export default ListMovies
