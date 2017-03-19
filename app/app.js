import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './components/grid.js';

if (document.getElementById('grid-main') !== null){
  ReactDOM.render(
    <Grid />,
    document.getElementById('grid-main')
  );
}
