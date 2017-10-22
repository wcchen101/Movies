'use strict';

import React, { Component } from 'react';
import ListMovies from './ListMovies';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//css
require('style-loader!./App.css');

class App extends React.Component {

  render() {
    return (
    <MuiThemeProvider>
      <div className='app'>
        <h1>Movie Reviews</h1>
        <ListMovies />
      </div>
    </MuiThemeProvider>

    );
  }
}

export default App;
