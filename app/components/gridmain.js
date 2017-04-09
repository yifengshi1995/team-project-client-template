import React from 'react';
import Gridmaincards from './gridmaincards.js';
import Gridmainbar from './gridmainbar.js';

export default class Gridmain extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      cards: props.cards
    }
  }
  render() {
    var card = this.state.cards;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          {
            card.map((card, i) => {
              return (
                <Gridmaincards key={i} frontContent={card.frontContent} backContent={card.backContent} />
              );
            })
          }

            <Gridmainbar like="Like" email1="Email" email2="Friends" share="Share">
            </Gridmainbar>
          </div>
        </div>
      </div>
    )
  }
}
