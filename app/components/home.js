import React from 'react';
import {currentTimeToString}  from '../util';
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
                Your Stacks
                <br />
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
