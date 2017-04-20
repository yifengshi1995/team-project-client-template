import React from 'react';

export default class Decktitle extends React.Component {
    render() {
        return (
            <div>
                <div className="deck-name">
                    <h1>{this.props.deckname}</h1>
                </div>
            </div>
        )
    }
}
