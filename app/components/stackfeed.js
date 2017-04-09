import React from 'react';
import {getUserData} from '../server';
import Stackfeeditem from './stackfeeditem.js';

export default class Stackfeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stacks: []
        };
    }
    componentDidMount() {
        getUserData(this.props.user, (userData) => {
            this.setState(userData)
        });
    }

    render() {
      return (
        <div>
            {this.state.stacks.map((stack) => {
                return (
                    <Stackfeeditem key={stack._id} data={stack} />
                )
            })}
        </div>
      )
    }
}
