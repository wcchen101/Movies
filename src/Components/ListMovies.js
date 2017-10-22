import React, { Component } from 'react'
import ListReviews from './ListReviews'
import { Rating } from 'material-ui-rating'
import RaisedButton from 'material-ui/RaisedButton'

var localMovies = require('../data.json')

class ListMovies extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      movies: [],
      reviews: [],
      reviewState: false,
    }
  }
  componentDidMount() {
    this.setState({
      movies: localMovies.movies,
      reviews: localMovies.reviews,
    })
  }
  onChangeReviewState(newState) {
    this.setState({
      reviewState: !newState,
    })
  }
  render() {
    const { movies, reviews, reviewState } = this.state
    console.log(reviews)
    return (
      <div className='list-movies-part'>
        <div className='list-movies '>
          {movies !== undefined && movies && (movies.map((movie, index) =>
            <div className='list-movies-content clearfix'>
              <img className='list-movies-image' src={movie['cover-url']} alt='movie images'/>
              <a> {movie['id']}. </a>
              <a href={movie['url']}> {movie['title']} </a>
              <div className='movies-score'>
                <Rating
                  value={movie['score'] * 10}
                  max={10}
                  onChange={(value) => console.log(`Rated with value ${value}`)}
                />
                <a>{movie['score'] * 10}/10</a>
              </div>
              <a>year: {movie['year']}</a>
              <a>director: {movie['director']}</a>
              <a>url: {movie['url']}</a>
              <p>synopsis: {movie['synopsis']}</p>
              <a>rating: {movie['rating']}</a>
              <a>runtime-in-minutes: {movie['runtime-in-minutes']}</a>
              <a>oscar-nominations: {movie['oscar-nominations']}</a>
              <p>oscar: {movie['oscars']}</p>
              <div className='list-movies-review'>
                {reviewState === true ?  (
                  <div>
                    <ListReviews
                      movieId={movie['id']}
                    />
                    <p>{reviews['movie-id']}</p>
                    <RaisedButton className='clearfix' label="Hide Review" onClick={() => this.onChangeReviewState(reviewState)} />
                  </div>
                ) : (
                  <RaisedButton className='clearfix' label="Read Review" onClick={() => this.onChangeReviewState(reviewState)} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
export default ListMovies
