import React from 'react';
import UINAVBAR from './ui-nav-bar.js';
import Stackfeed from './stackfeed.js';

export default class Home extends React.Component {




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
                <Stackfeed user={4} />
            </div>


                <div className="col-md-3 right-sidebar">
                    <div className="row profile">
                        <span className="glyphicon glyphicon-user profile-picture"></span>
                        <p>USERNAME</p>
                    </div>
                    <div className="row-stats">
                        <ul>
                          <li>March 25, 2017</li>
                          <li>Member since: Feb 2017</li>
                          <li>Smart Stacks: 9</li>
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
