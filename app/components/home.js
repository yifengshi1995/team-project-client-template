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
                        <p>USERNAME</p>
                    </div>
                    <div className="row-stats">
                        <ul>
                          <li>{currentTimeToString()}</li>
                          <li>Member since: Feb 2017</li>
                          <li>Smart Stacks: 4</li>
                          <li>Visibility: Private</li>
                        </ul>
                    </div>
                    </div>
                    </div>
            </div>
          </div>
        )
    }
}
