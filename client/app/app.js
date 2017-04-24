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
    return <Grid user={this.props.params.user} stack={this.props.params.stack}/>;
  }
}

class SettingsPage extends React.Component {
  render() {
    return <Settings user={4} />;
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path=":user/grid/:stack" component={GridPage} />
      <Route path="settings/:user" component={SettingsPage} />
      <Route path="createcard/" component={UIEditCard} />
    </Route>
  </Router>
),document.getElementById('ui-home'));
