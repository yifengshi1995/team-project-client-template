import React from 'react';
import UINAVBAR from './ui-nav-bar.js';
import {getSettingsData, saveSettings} from '../server';
// import {Link} from 'react-router';

export default class Settings extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      userId: this.props.user,
      // userId: props.user,
      editedU: "",
      editedD: "",
      editedE: ""
      // fullName: this.props.user.fullName,
      // description: this.props.user.description,
      // email: this.props.user.email
    };
  }

  componentDidMount() {
    getSettingsData(this.state.userId, (userData) => {
    // getSettingsData(this.props.user, (userData) => {
      this.setState(userData);
    });
  }

  handleUsernameChange(e){
    e.preventDefault();
    this.setState({ editedU: e.target.value });
  }

  handleDescriptionChange(e){
    e.preventDefault();
    this.setState({ editedD: e.target.value });
  }

  handleEmailChange(e){
    e.preventDefault();
    this.setState({ editedE: e.target.value });
  }

  save(e){
    e.preventDefault();
    var fullName;
    var description;
    var email;
    if(this.state.editedU !== ""){
      fullName = this.state.editedU;
    }
    else{
      fullName = this.state.fullName;
    }
    if(this.state.editedD !== ""){
      description = this.state.editedD;
    }
    else{
      description = this.state.description;
    }
    if(this.state.editedE !== ""){
      email = this.state.editedE;
    }
    else{
      email = this.state.email;
    }
    saveSettings(this.state.userId, fullName, description, email, (userData) =>
      {
        this.setState({
          // fullName: fullName,
          // description: description,
          // email: email,
          editedU: "",
          editedD: "",
          editedE: ""
        });
        this.componentDidMount();
      });
  }

  cancel(e){
    e.preventDefault();
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
                                <input type="text" className="username" name="username" placeholder={this.state.fullName} onChange={(e) => this.handleUsernameChange(e)} value={this.state.editedU}/><br />
                                <p className="field">Profile Picture</p>
                                <input className="image" name="propic" placeholder="/User/Documents/Photos/smart.jpg" />
                                <div className="fileUpload btn btn-default">
                                  <span>Upload</span>
                                  <input type="file" className="upload" />
                                </div>
                                <p className="field">User Description</p>
                                <input type="text" rows="4" className="input" name="description" placeholder={this.state.description} onChange={(e) => this.handleDescriptionChange(e)} value={this.state.editedD}/><br />
                                <p className="field">Email</p>
                                <input type="text" className="input" name="email" placeholder={this.state.email} onChange={(e) => this.handleEmailChange(e)} value={this.state.editedE}/><br />
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
                              <button type="submit" className="btn btn-success formbutton" onClick={(e) => this.save(e)}>
                                Save Changes
                              </button>
                              <button type="submit" margin-right="5px;" margin-left="5px;" className="btn btn-default formbutton" onClick={(e) => this.cancel(e)}>
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
