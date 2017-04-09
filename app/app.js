import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './components/grid.js';
import UIEditCard from './components/ui-edit-card.js'
import Gallery from './components/gallery.js';
import Home from './components/home.js';
import Settings from './components/settings.js';

if (document.getElementById('ui-grid') !== null) {
  ReactDOM.render(
    <Grid stack={1} />,
    document.getElementById('ui-grid')
  );
}
/*
class GridPage extends React.Component {
    render(){
      return(
        <Grid stack={1} />
      )
    }
}
*/
else if (document.getElementById('ui-edit-card') !== null) {
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

else if (document.getElementById('ui-settings') !== null) {
  ReactDOM.render(
    <Settings />,
    document.getElementById('ui-settings')
  );

}
