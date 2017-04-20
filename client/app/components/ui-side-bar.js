import React from 'react';
import {Link} from 'react-router';

export default class UISIDEBAR extends React.Component{

  constructor(props){
      super(props);
      this.state = {

      }
  }

  render(){
    return(
      <div>
      <div className="col-md-3 left-bar">
        <ul className="nav nav-pills nav-stacked">
            <li className="left-bar-head" role="presentation"><span className="glyphicon glyphicon-book"></span>
              <strong>YOUR STACKS</strong>
            </li>
            <li role="presentation" className="active">
                <a href="#"><span className="glyphicon glyphicon-list-alt"></span>
                  Web Programming</a>
            </li>
            <li role="presentation" className="active">
                <a href="#"><span className="glyphicon glyphicon-list-alt"></span>
                Trig Identities</a>
            </li>
            <li role="presentation" className="active">
                <a href="#"><span className="glyphicon glyphicon-list-alt"></span>
                  US Capitols</a>
            </li>
            <li role="presentation" className="active">
                <a href="#"><span className="glyphicon glyphicon-list-alt"></span>
                  Dog Breeds</a>
            </li>
            <li role="presentation" className="active">
                <a href="#"><span className="glyphicon glyphicon-list-alt"></span>
                  World War II Battles</a>
            </li>
            <li role="presentation" className="active">
                <a href="#"><span className="glyphicon glyphicon-list-alt"></span>
                  US Presidents</a>
            </li>
            <li role="presentation" className="active">
                <a href="#"><span className="glyphicon glyphicon-list-alt"></span>
                  Types of Wine</a>
            </li>
            <li role="presentation" className="active">
                <a href="#"><span className="glyphicon glyphicon-list-alt"></span>
                  Music Theory</a>
            </li>
            <li role="presentation" className="active">
                <a href="#"><span className="glyphicon glyphicon-list-alt"></span>
                Early 2000s pop</a>
            </li>
            <li role="presentation" className="active">
                <a href="#"><span className="glyphicon glyphicon-plus"></span>
                Create a new stack</a>
            </li>
        </ul>
        </div>
      </div>
    )
  }
}
