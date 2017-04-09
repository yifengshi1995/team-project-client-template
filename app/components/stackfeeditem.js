import React from 'react';
import {getStackData} from '../server';
import {unixTimeToString} from '../util.js'

export default class Stackfeeditem extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props;
    }

    componentDidMount() {
        getStackData(this.props.data, (stackData) => {
            this.setState(stackData);
        })
    }
    render() {
        var data = this.state;

        return (
            <div>
                <div className="search-result">
                    <div className="search-deck-preview">

                        <div className="stack-thumbnail">
                            <img src={'../build/img/default-thumbnail.jpg'}/>
                        </div>

                    </div>

                    <div className="search-deck-info">
                        <div className="stack-name">
                            <a href="#">{data.name}</a>
                        </div>
                        <div className="stack-info">
                            20 cards  ·  Posted {unixTimeToString(data.postDate)}
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}
