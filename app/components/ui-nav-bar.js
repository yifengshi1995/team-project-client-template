import React from 'react';

export default class UINAVBAR extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-fixed-top navbar-default">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                      data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">
                <span className="glyphicon glyphicon-th"></span>
              </a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <form className="navbar-form navbar-left" role="search">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search SmartCards" />
                    <span className="input-group-btn">
                    <button type="submit" className="btn btn-default">
                        <span className="glyphicon glyphicon-search"></span>
                    </button>
                    </span>
                </div>
              </form>
              <div className="nav navbar-nav navbar-right">
                <div className="btn-toolbar pull-right" role="toolbar">
              <div className="btn-group" role="group">
                  <button type="button" className="btn btn-default navbar-btn">
                    <span className="glyphicon glyphicon-plus"></span>
                  </button>
              </div>
              <div className="btn-group" role="group">
                  <button type="button" className="btn btn-default navbar-btn">
                    <span className="glyphicon glyphicon-cog"></span>
                  </button>
              </div>
              <div className="btn-group" role="group">
                <button type="button" className="btn btn-default navbar-btn">
                  <span className="glyphicon glyphicon-lock"></span>
                </button>
                <div className="btn-group" role="group">
                  <button type="button" className="btn btn-default dropdown-toggle navbar-btn"
                          data-toggle="dropdown">
                    <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu">
                    <li><a href="#">Log out...</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
            </div>
        </div>
        </nav>
      </div>
    )
  }
}
