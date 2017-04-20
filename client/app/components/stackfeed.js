import React from 'react';
import {getStacksFromUser} from '../server';
import Stackfeeditem from './stackfeeditem.js';

export default class Stackfeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stacks: []
        };
    }
    componentDidMount() {
        getStacksFromUser(this.props.user, (userData) => {
            this.setState({stacks: userData});
        });
    }

    render() {
      return (
        <div>
            {this.state.stacks.map((stack) => {
                return (
                    <Stackfeeditem key={stack._id} userid={this.props.user} data={stack} />
                )
            })}
        </div>
      )
    }
}
