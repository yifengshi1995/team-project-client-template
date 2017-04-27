import React from 'react';
import {saveCard} from '../server.js'
import {Link} from 'react-router';
import UINAVBAR from './ui-nav-bar.js';
//import STACKPREIVEWSLIDER from './ui-stack-scroll-menu.js'
//import EDITCARD from './contentable-edit-car.js'
//simport {saveCard,cancelCard} from '../server';
export default class UIEditCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frontVal: "",
      backVal:"",
      stackId: props.stack,
      userId: props.user
    };
  }
  handleFrontChange(e){
    this.setState({ frontVal: e.target.value });
  }
  handleBackChange(e){
    this.setState({ backVal: e.target.value });
  }

  subthiscom(){
    var front = this.state.frontVal.trim();
    var back = this.state.backVal.trim();

    if (front !== "" && back !== "") {

      saveCard(this.state.userId, this.state.stackId, front, back);
      this.setState({ frontVal: "",backVal: ""});
    }
  }

  render() {
    return (
      <div>
  <UINAVBAR />
  <div className="container input-group">
    <div className="row">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-12">
                    <div className="editable-card-side-title">Front</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                        <textarea className="editable-card editable-card-front" onChange={(e) => this.handleFrontChange(e)} value={this.state.frontVal}></textarea>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-12"><div className="editable-card-side-title">Back</div></div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                      <textarea className="editable-card editable-card-front" onChange={(e) => this.handleBackChange(e)} value={this.state.backVal}></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="row">
              <div className="col-md-12"><div className="editable-card-side-title">Controls</div></div>
            </div>

              <button className="btn btn-default" type="button" onClick={(e) => this.subthiscom(e)}>
                <span className="glyphicon glyphicon-ok"></span>
              </button>
              <button className="btn btn-default" type="button">
                  <Link to={this.state.userId + "/grid/" + this.state.stackId}><span>Back to Deck</span></Link>
              </button>
          </div>
        </div>
      </div>
    </div>
  </div>
      </div>
    )
  }
}
