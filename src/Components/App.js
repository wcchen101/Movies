'use strict';

import React, { Component } from 'react';
import ListMovies from './ListMovies';
//css
require('style-loader!./App.css');

class App extends React.Component {

  render() {
    return (
    <div className='app'>
      <h1>Movie Reviews</h1>
      <ListMovies />
    </div>
    );
  }
}

export default App;
