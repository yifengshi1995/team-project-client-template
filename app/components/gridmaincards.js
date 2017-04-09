import React from 'react';

export default class Gridmaincards extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      frontContent: props.frontContent,
      backContent: props.backContent
    }
  }

  didFlip(){
    var flipped = false;
    return flipped;
  }

  render() {
    var isFront = true;
    if(didFlip()){
      isFront = false;
    }
    return (
      <div>
        <div className="row">
          <div className="col-md-4 cardholder">
            <div className="card">
              <div className="card-front">
                <a href="#">{this.state.frontContent}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
