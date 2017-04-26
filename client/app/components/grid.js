import React from 'react';
import Gridmain from './gridmain';
import Gridmainbar from './gridmainbar';
import UINAVBAR from './ui-nav-bar';
import {getCardsInStack} from '../server';
import {Link} from 'react-router';

export default class Grid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stackId: props.stack,
      userId: props.user,
      cards: []
    };
  }

  componentDidMount() {
    getCardsInStack(this.state.userId, this.state.stackId, (cardData) => {
      this.setState({cards: cardData});
    });
  }

  render() {
    return (
      <div>
        <UINAVBAR />
        <div className="container">
          <div className="row">
              <div className="col-md-12">
                  <button type="button" className="btn btn-default navbar-btn">
                    <Link to={this.state.userId + "/createcard/" + this.state.stackId}><span className="glyphicon glyphicon-plus"></span></Link>
                  </button>
              </div>
            <div className="row">
              <div className="col-md-12">
                    {this.state.cards.map((card) => {
                      return(
                        <Gridmain key={card._id} cards={card}/>
                      );
                    })}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
