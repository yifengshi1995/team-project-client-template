import React from 'react';
import Gridmain from './gridmain.js';
import UINAVBAR from './ui-nav-bar.js';
import {getCardsInStack} from '../server';

export default class Grid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stackId: props.stack,
      cards: []
    }
  }

  componentDidMount() {
    getCardsInStack(this.state.stackId, (cardData) => {
      this.setState({cards: cardData});
    });
    console.log(this.state.cards.length);
  }

  render() {
    return (
      <div>
        <UINAVBAR />
        <Gridmain cards={this.state.cards}/>
      </div>
    )
  }
}
