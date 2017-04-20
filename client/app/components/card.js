import React from 'react';

export default class Card extends React.Component {
    render() {
        return (
            <div>
                <div className="card">
                    {this.props.card}
                </div>
            </div>
        )
    }
}
