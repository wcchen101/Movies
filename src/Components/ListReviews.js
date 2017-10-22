import React, { Component } from 'react'

var localMovies = require('../data.json')

class ListReviews extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
    }
  }
  componentWillMount() {
    this.setState({
      reviews: localMovies.reviews,
    })
  }

  render () {
    const { movieId } = this.props
    const { reviews } = this.state
    console.log('props movie', this.props.movieId)
    let movieReviews = reviews.find(review => review['movie-id'] === this.props.movieId)

    console.log(movieReviews)
    return (
      <div>
        {movieReviews !== undefined && movieReviews && (
          <div>
            <p>{movieReviews.review}</p>
          </div>
        )}
      </div>
    )
  }
}
export default ListReviews
