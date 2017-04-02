import React from 'react';
import UINAVBAR from './ui-nav-bar.js';
import UISIDEBAR from './ui-side-bar.js';

export default class Home extends React.Component {
    render() {
        return (
          <div>
            <UINAVBAR />
            <div className = "container">
            <div className = "row">
            <UISIDEBAR />

            <div className="col-md-6 main-home-section">
              <div className="row">
              <div className="col-md-12 welcome">
                <h1>Hello User!</h1>
                <h2>Welcome to SmartCards!</h2>
              </div>
              </div>


              <div className="row">
                  <div className="col-md-5 home-box">
                    <h2> VIEW YOUR DECKS </h2>
                    <br />
                      <a href="#"><span className="glyphicon glyphicon-th larger"></span></a>
                  </div>
                  <div className="col-md-2"></div>
                  <div className="col-md-5 home-box">
                    <h2> CREATE NEW DECK </h2>
                    <br />
                <a href="#"><span className="glyphicon glyphicon-plus larger"></span></a>
                  </div>
                </div>



                <div className="row">
                  <div className="col-md-2"></div>
                    <div className="col-md-8 quote">
                        <h3>INSPIRATIONAL QUOTE OF THE DAY</h3>
                        <p>"If Britney Spears can make it through 2007, you can make it through the day"</p>
                        <p>-The Internet</p>
                    </div>
                    <div className="col-md-2"></div>
                </div>
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
