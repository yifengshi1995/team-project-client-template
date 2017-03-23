import React from 'react';

export default class Gridmainbar extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="bottom-functions">
          <div className="row">
              <div className="col-md-4">
              </div>
              <div className="col-md-4">
                    <a className="btn btn-sq-lg" href="#">
                      <span className="glyphicon glyphicon-heart"></span>
                      <br/>{this.props.like}
                    </a>
                    <a className="btn btn-sq-lg" href="#">
                      <span className="glyphicon glyphicon-envelope"></span>
                      <br/>{this.props.email1}<br/>{this.props.email2}
                    </a>
                    <a className="btn btn-sq-lg" href="#">
                      <span className="glyphicon glyphicon-share"></span>
                      <br/>{this.props.share} <br/>&nbsp;
                    </a>
              </div>
              <div className="col-md-4">
              </div>
          </div>
        </div>
      </div>
    )
  }
}
