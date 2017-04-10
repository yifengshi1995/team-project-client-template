import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './components/grid.js';
import UIEditCard from './components/ui-edit-card.js'
import Gallery from './components/gallery.js';
import Home from './components/home.js';
import Settings from './components/settings.js';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}

class HomePage extends React.Component {
  render() {
    return <Home user={4}/>;
  }
}

class GridPage extends React.Component {
  render() {
    return <Grid stack={this.props.params.stack}/>;
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="grid/:stack" component={GridPage} />
    </Route>
  </Router>
),document.getElementById('ui-home'));

/*
if (document.getElementById('ui-grid') !== null) {
  ReactDOM.render(
    <Grid stack={1} />,
    document.getElementById('ui-grid')
  );
}

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
*/
