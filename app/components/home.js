import React from 'react';
import {currentTimeToString}  from '../util';
import {randomQuote} from '../util';
import {getUserData} from '../server';
import UINAVBAR from './ui-nav-bar.js';
import UISIDEBAR from './ui-side-bar.js';
import Stackfeed from './stackfeed.js';

export default class Home extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        user: this.props.user
      };
    }

    componentDidMount(){
        getUserData(this.props.user, (userData) => {
          this.setState(userData)
        });
    }

    render() {
        return (
          <div>
            <UINAVBAR />

            <div className = "container">
            <div className = "row">
            <div className="col-md-1">

            </div>

            <div className="col-md-8 main-home-section">
            <div className="row">
            <div className ="col-md-12 welcome">
              <h1> Hello {this.state.fullName} </h1>
              <h2> Welcome to SmartCards! </h2>
                    <div className = "col-md-1"></div>
                    <div className="col-md-10 quote">
                        <h3>INSPIRATIONAL QUOTE OF THE DAY</h3>
                        <p>{randomQuote()}</p>
                    </div>
                    <div className = "col-md-1"></div>
                    </div>


            </div>


                <h4>Your Stacks</h4>
                
                <Stackfeed user={this.state.user} />

            </div>
                <div className="col-md-3 right-sidebar">
                    <div className="row profile">
                        <span className="glyphicon glyphicon-user profile-picture"></span>
                        <p>{this.state.fullName}</p>
                    </div>
                    <div className="row-stats">
                        <ul>
                          <li>{currentTimeToString()}</li>
                          <li>Member since: {this.state.memSince}</li>
                          <li>Smart Stacks: {this.state.numStacks}</li>
                          <li>Visibility: {this.state.visiblity}</li>
                        </ul>
                    </div>
                    </div>
                    </div>
            </div>
          </div>
        )
    }
}
