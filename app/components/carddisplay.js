import React from 'react';
import Card from './card.js';
import Decktitle from './decktitle.js';

export default class Carddisplay extends React.Component {
    render() {
        return (
            <div>
                <Decktitle deckname="Deck Name" />
                <button type="button" className="btn prev-card-btn">
                    <span className="glyphicon glyphicon-menu-left"></span>
                </button>
                <Card card="" />
                <button type="button" className="btn next-card-btn">
                    <span className="glyphicon glyphicon-menu-right"></span>
                </button>
            </div>
        )
    }
}
