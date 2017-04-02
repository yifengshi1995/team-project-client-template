import React from 'react';

import UINAVBAR from './ui-nav-bar.js';
import STACKPREIVEWSLIDER from './ui-stack-scroll-menu.js'
import EDITCARD from './contentable-edit-car.js'

export default class UIEditCard extends React.Component {
  render() {
    return (
      <div>
  <UINAVBAR />
  <div className="container">
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
            <div className="row horizontal-flex">
              <button className="card-editing-buttons">TextIcon</button>
              <button className="card-editing-buttons">Color</button>
              <button className="card-editing-buttons">Highlight</button>
            </div>
            <div className="row horizontal-flex">
              <button className="card-editing-buttons"><b>BOLD</b></button>
              <button className="card-editing-buttons"><i>Emphasize</i></button>
              <button className="card-editing-buttons"><u>Underline</u></button>
            </div>
            <div className="row horizontal-flex">
              <button className="card-editing-buttons">Image</button>
              <button className="card-editing-buttons">Video</button>
              <button className="card-editing-buttons">Audio</button>
            </div>
            <div className="row horizontal-flex">
              <button className="card-editing-buttons">Finish</button>
              <button className="card-editing-buttons">Cancel</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 bottom-scrollbar">
            <STACKPREIVEWSLIDER />
          </div>
        </div>
      </div>
    </div>
  </div>

      </div>
    )
  }
}
