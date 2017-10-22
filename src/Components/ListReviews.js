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
    console.log(reviews)
    let movieReviews = reviews.find(review => review['movie-id'] === this.props.movieId)

    console.log(movieReviews)
    return (
      <div>
        {reviews !== undefined && reviews && (reviews.map((review) =>
          <div>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
    )
  }
}
export default ListReviews
