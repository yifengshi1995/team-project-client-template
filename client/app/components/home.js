import React from 'react';
import {currentTimeToString}  from '../util';
import {randomQuote} from '../util';
import {getUserData} from '../server';
import UINAVBAR from './ui-nav-bar.js';
import UISIDEBAR from './ui-side-bar.js';
import Stackfeed from './stackfeed.js';
import ErrorBanner from './errorbanner';
import {getSettingsData, createStack} from '../server';

export default class Home extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        user: this.props.user,
        possibleStackName: "",
        quote: randomQuote(),
        userData: ""
      };
    }

    handleNameChange(e){
      this.setState({ possibleStackName: e.target.value });
    }

    subthisstack(){
      var stackName = this.state.possibleStackName.trim();

      if (stackName !== "") {
        createStack(this.state.user, stackName, () => {
            this.setState({ possibleStackName: ""});
        });
      }
    }

    componentDidMount() {
      getSettingsData(this.state.user, (settingsData) => {
        this.setState({
            userData: settingsData
        });
      });
    }

    render() {
        return (
          <div>
            <UINAVBAR />

            <div className = "container">
              <div className="row">
                <div className="col-md-12">
                  <ErrorBanner />
                </div>
              </div>
            <div className = "row">
            <div className="col-md-1">

            </div>

            <div className="col-md-8 main-home-section">
            <div className="row">
            <div className ="col-md-12 welcome">
              <h1> Hello {this.state.userData.fullName} </h1>
              <h2> Welcome to SmartCards! </h2>
                    <div className = "col-md-1"></div>
                    <div className="col-md-10 quote">
                        <h3>INSPIRATIONAL QUOTE OF THE DAY</h3>
                        <p>{this.state.quote}</p>
                    </div>
                    <div className = "col-md-1"></div>
                    </div>


            </div>

            <div className="input-group">
                <input type="text" className="form-control" placeholder="Create New Deck" onChange={(e) => this.handleNameChange(e)}/>
                <span className="input-group-btn">
                <button type="submit" className="btn btn-default" onClick={(e) => this.subthisstack(e)}>
                    <span className="glyphicon glyphicon-plus"></span>
                </button>
                </span>
            </div>


                <h4>Your Stacks</h4>

                <Stackfeed user={this.state.user} />

            </div>
                <div className="col-md-3 right-sidebar">
                    <div className="row profile">
                        <span className="glyphicon glyphicon-user profile-picture"></span>
                        <p>{this.state.userData.fullName}</p>
                    </div>
                    <div className="row-stats">
                        <ul>
                          <li>{currentTimeToString()}</li>
                          <li>Member since: {this.state.userData.memSince}</li>
                          <li>Smart Stacks: {this.state.userData.numStacks}</li>
                          <li>Bio: {this.state.userData.description}</li>
                          <li>Visibility: {this.state.userData.visiblity}</li>
                        </ul>
                    </div>
                    </div>
                    </div>
            </div>
          </div>
        )
    }
}
