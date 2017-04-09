import React from 'react';

import UINAVBAR from './ui-nav-bar.js';
//import STACKPREIVEWSLIDER from './ui-stack-scroll-menu.js'
import EDITCARD from './contentable-edit-car.js'
//simport {saveCard,cancelCard} from '../server';
export default class UIEditCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      frontVal: "",
      backVal:""
    };
  }
  handleFrontChange(e){
    this.setState({ frontVal: e.target.value });
  }
  handleBackChange(e){
    this.setState({ frontVal: e.target.value });
  }
  subthiscom(){
    var front = this.state.frontVal.trim();
    var back = this.state.backVal.trim();
    if (front !== "" && back !== "") {
      // Post comment
      this.props.onPost(this.state.value);
      this.setState({ value: "" });
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
                  <EDITCARD side="Front"/>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-12"><div className="editable-card-side-title">Back</div></div>
                </div>
                <div className="row">
                  <EDITCARD side="Back"/>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="row">
              <div className="col-md-12"><div className="editable-card-side-title">Controls</div></div>
            </div>
            <span className="input-group-btn">
              <button className="btn btn-default" type="button">
                <span className="glyphicon glyphicon-ok"></span>
              </button>
              <button className="btn btn-default" type="button">
                <span className="glyphicon glyphicon-remove"></span>
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

      </div>
    )
  }
}
