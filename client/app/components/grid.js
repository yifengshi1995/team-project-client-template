import React from 'react';
import Gridmain from './gridmain';
import Gridmainbar from './gridmainbar';
import UINAVBAR from './ui-nav-bar';
import {getStackData} from '../server';
import {Link} from 'react-router';
import {unixTimeToString} from '../util';

export default class Grid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stackId: props.stack,
      userId: props.user,
      cards: [],
      stackName: "",
      date: ""
    };
  }

  componentDidMount() {
    getStackData(this.state.userId, this.state.stackId, (stackData) => {
      this.setState({
          cards: stackData.cards,
          stackName: stackData.name,
          date: stackData.postDate
      });
    });
  }

  render() {
    return (
      <div>
        <UINAVBAR />
        <div className="container">
        <div>
        <div className="row grid-header">
            <div className="col-md-12">
                <h1>
                    {this.state.stackName}
                </h1>
                <p>
                    {this.state.cards.length} cards  ·  Created {unixTimeToString(this.state.date)}
                </p>
            </div>
        </div>
        <div className="row">
          <div className="col-md-12">
              <button type="button" className="btn btn-default add-card-btn">
                <Link to={this.state.userId + "/createcard/" + this.state.stackId}><span>+ Add Card</span></Link>
              </button>
          </div>
        </div>
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
    )
  }
}
