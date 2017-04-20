import React from 'react';
import {saveCard} from '../server.js'
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
      deckVal:""
    };
  }
  handleFrontChange(e){
    this.setState({ frontVal: e.target.value });
  }
  handleBackChange(e){
    this.setState({ backVal: e.target.value });
  }
  handleDeckChange(e){
    this.setState({deckVal: e.target.value})
  }
  subthiscom(){
    var front = this.state.frontVal.trim();
    var back = this.state.backVal.trim();
    var deck = this.state.deckVal.trim();
    if (front !== "" && back !== "") {
      // Post comment
      //this.props.onPost(this.state.value);
      //this.setState({ value: "" });
      saveCard(deck, front, back, (updatedCommentPage) => {
        // Update our state to trigger a re-render.
        //this.setState(updatedCommentPage);
      });
      this.setState({ frontVal: "",backVal: "",deckVal:"" });
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
            <input type="text" className="form-control" placeholder="Enter Deck ID" value={this.state.deckVal} onChange={(e) => this.handleDeckChange(e)}/>
              <button className="btn btn-default" type="button" onClick={(e) => this.subthiscom(e)}>
                <span className="glyphicon glyphicon-ok"></span>
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
