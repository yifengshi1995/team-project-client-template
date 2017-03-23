import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './components/grid.js';
import UIEditCard from './components/ui-edit-card.js'
if (document.getElementById('grid-main') !== null){
  ReactDOM.render(
    <Grid />,
    document.getElementById('grid-main')
  );
} else if (document.getElementById('ui-edit-card') !== null) {
  ReactDOM.render(
    <UIEditCard />,
    document.getElementById('ui-edit-card')
  );
}
