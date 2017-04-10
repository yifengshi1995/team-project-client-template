import React from 'react';
import UINAVBAR from './ui-nav-bar.js';
import {getUserData} from '../server';

export default class Settings extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      user: this.props.user
    };
  }

  componentDidMount(){
      getUserData(this.props.user, (userData) => {
        this.setState(userData);
      });
  }

    render() {
        return (
          <div>
          <UINAVBAR />
          <div className="container">
              <div className="row">
                  <div className="col-md-3 left-bar">
                  </div>
                  <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-12 welcome">
                              <h1>Account Settings</h1>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-5">
                              <form action="#">
                                <p className="field"><b>Username</b></p>
                                <input type="text" className="username" name="username" placeholder={this.state.fullName}/><br />
                                <p className="field">Profile Picture</p>
                                <input className="image" name="propic" placeholder="/User/Documents/Photos/smart.jpg" />
                                <div className="fileUpload btn btn-default">
                                  <span>Upload</span>
                                  <input type="file" className="upload" />
                                </div>
                                <p className="field">User Description</p>
                                <input type="text" rows="4" className="input" name="description" placeholder="much cards such smart wow" /><br />
                                <p className="field">Email</p>
                                <input type="text" className="input" name="email" placeholder={this.state.email} /><br />
                                <p className="field">Tabletop Background Image</p>
                                <input className="image" name="background" placeholder="/User/Documents/Photos/cards.jpg" />
                                <div className="fileUpload btn btn-default">
                                  <span>Upload</span>
                                  <input type="file" className="upload" />
                                </div>
                                <p className="field">Password</p>
                                <input type="text" className="input" name="pass" placeholder={this.state.password} /><br />
                                <p className="field">Confirm Password</p>
                                <input type="text" className="input" name="confirmpass" placeholder={this.state.password} /><br />
                              </form>
                              <div>
                              <button type="submit" className="btn btn-success formbutton">
                                Save Changes
                              </button>
                              <button type="submit" margin-right="5px;" margin-left="5px;" className="btn btn-default formbutton">
                                Cancel
                              </button>
                              </div>
                          </div>
                          <div className="col-md-4 right-sidebar">
                            <div className="row profile">
                              <span className="glyphicon glyphicon-user profile-picture"></span>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
        )
    }
}
