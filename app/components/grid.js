import React from 'react';
import Gridmain from './gridmain.js';
import UINAVBAR from './ui-nav-bar.js';

export default class Grid extends React.Component {
  render() {
    return (
      <div>
        <UINAVBAR />
        <Gridmain />
      </div>
    )
  }
}
