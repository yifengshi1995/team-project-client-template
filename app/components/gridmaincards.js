import React from 'react';

export default class Gridmaincards extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4 cardholder">
            <label>
              <input type="checkbox" />
              <div className="card">
                <div className="card-front">
                  {this.props.card1front}
                </div>
                <div className="card-back">
                  {this.props.card1back}
                </div>
              </div>
            </label>
          </div>
          <div className="col-md-4 cardholder">
            <label>
              <input type="checkbox" />
              <div className="card">
                <div className="card-front">
                  {this.props.card2front}
                </div>
                <div className="card-back">
                  {this.props.card2back}
                </div>
              </div>
            </label>
          </div>
          <div className="col-md-4 cardholder">
            <label>
              <input type="checkbox" />
              <div className="card">
                <div className="card-front">
                  {this.props.card3front}
                </div>
                <div className="card-back">
                  {this.props.card3back}
                </div>
              </div>
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 cardholder">
            <label>
              <input type="checkbox" />
              <div className="card">
                <div className="card-front">
                  {this.props.card4front}
                </div>
                <div className="card-back">
                  {this.props.card4back}
                </div>
              </div>
            </label>
          </div>
          <div className="col-md-4 cardholder">
            <label>
              <input type="checkbox" />
              <div className="card">
                <div className="card-front">
                  {this.props.card5front}
                </div>
                <div className="card-back">
                  {this.props.card5back}
                </div>
              </div>
            </label>
          </div>
          <div className="col-md-4 cardholder">
            <label>
              <input type="checkbox" />
              <div className="card">
                <div className="card-front">
                  {this.props.card6front}
                </div>
                <div className="card-back">
                  {this.props.card6back}
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    )
  }
}
