import React from 'react';
import Gridmainbar from './gridmainbar.js';

export default class Gridmain extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      cards: props.cards,
      flipped: false
    };
  }

  flip(clickEvent){
    this.setState({flipped: !this.state.flipped});
  }

  render() {

    var classNameFlip = this.state.flipped ? "card-back-flip" : "card-front-flip";

    return (
      <div className="col-md-4 cardholder">
        <div className="card" onClick={(e) => this.flip(e)}>
          <div className={"card-front " + classNameFlip}>{this.state.cards.frontContent}</div>
          <div className={"card-back " + classNameFlip}>{this.state.cards.backContent}</div>
        </div>
      </div>
    )
  }
}
