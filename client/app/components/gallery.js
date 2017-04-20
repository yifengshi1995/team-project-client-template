import React from 'react';
import Carddisplay from './carddisplay.js';
import UINAVBAR from './ui-nav-bar.js';
import  STACKPREIVEWSLIDER from './ui-stack-scroll-menu.js';

export default class Gallery extends React.Component {
    render() {
        return (
            <div>
            <UINAVBAR />
            <div className="container">
                <div className="row">

                    <div className="col-md-2 left-panel"></div>

                    <div className="col-md-8">
                        <div className="row-card-display">
                            <div className="card-display">
                                <Carddisplay />
                            </div>
                        </div>
                        <div className="row">
                              <button type="button" className="btn btn-sm btn-default edit-btn">
                                  <span className="glyphicon glyphicon-pencil"></span>
                              </button>
                              <button type="button" className="btn btn-sm btn-default add-btn">
                                 <span className="glyphicon glyphicon-plus"></span>
                              </button>
                        </div>
                    </div>

                    <div className="col-md-2 right-panel"></div>

                </div>

                <div className="row">
                    <div className="col-md-12 bottom-scrollbar">
                        <STACKPREIVEWSLIDER />
                    </div>
                </div>
            </div>

            </div>
        )
    }
}
