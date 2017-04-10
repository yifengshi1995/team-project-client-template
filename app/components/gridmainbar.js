import React from 'react';

export default class Gridmainbar extends React.Component {
  render() {
    return (
        <div>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <a className="btn btn-sq-lg" href="#">
              <span className="glyphicon glyphicon-heart"></span>
                <br/>Like
            </a>
            <a className="btn btn-sq-lg" href="#">
              <span className="glyphicon glyphicon-envelope"></span>
                <br/>Email<br/>Friends
            </a>
            <a className="btn btn-sq-lg" href="#">
              <span className="glyphicon glyphicon-share"></span>
                <br/>Share <br/>&nbsp;
            </a>
          </div>
          <div className="col-md-4"></div>
        </div>
    )
  }
}
