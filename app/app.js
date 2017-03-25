import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './components/grid.js';
import UIEditCard from './components/ui-edit-card.js'
import Gallery from './components/gallery.js';
import Home from './components/home.js';

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
else if (document.getElementById('ui-home') !== null) {
  ReactDOM.render(
    <Home />,
    document.getElementById('ui-home')
  );

}

else if (document.getElementById('ui-gallery') !== null) {
  ReactDOM.render(
    <Gallery />,
    document.getElementById('ui-gallery')
  );

}
