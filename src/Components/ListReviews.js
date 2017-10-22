import React, { Component } from 'react'

var localMovies = require('../data.json')

class ListReviews extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
    }
  }
  componentDidMount() {
    this.setState({
      reviews: localMovies.reviews,
    })
  }

  render () {
    const { movieId } = this.props
    return (
      <div>
        <p>{movieId}</p>
      </div>
    )
  }
}
export default ListReviews
