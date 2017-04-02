import React from 'react';
import PREVCARD from './preview-card.js'
export default class STACKPREIVEWSLIDER extends React.Component {
  render() {
	return (
	  <div>
	  <div className="scrollmenu">
		<PREVCARD  cardval="1"/>
		<PREVCARD  cardval="2"/>
		<PREVCARD  cardval="3"/>
		<PREVCARD  cardval="4"/>
		<PREVCARD  cardval="5"/>
	  </div>
	  </div>
	)
  }
}
