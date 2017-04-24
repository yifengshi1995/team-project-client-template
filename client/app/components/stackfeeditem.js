import React from 'react';
import {unixTimeToString} from '../util';
import {Link} from 'react-router';

export default class Stackfeeditem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          data: this.props.data,
          user: this.props.userid
        };
    }

    render() {
        var data = this.state.data;
        return (
            <div>
                <div className="search-result">
                    <div className="search-deck-preview">
                        <div className="stack-thumbnail">
                            <img src={'/img/fake_card_small_1.png'}/>
                        </div>
                    </div>
                    <div className="search-deck-info">
                        <div className="stack-name">
                            <Link to={'/' + this.state.user + "/grid/" + this.state.data._id}>{data.name}</Link>
                        </div>
                        <div className="stack-info">
                            {data.cards.length} cards  ·  Posted {unixTimeToString(data.postDate)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
