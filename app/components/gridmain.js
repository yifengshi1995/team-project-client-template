import React from 'react';
import Gridmaincards from './gridmaincards.js';
import Gridmainbar from './gridmainbar.js';

export default class Feed extends React.Component {
  render() {
    return (
      <div className='row'>

          <Gridmaincards card1front='Card 1 Front' card1back='Card 1 Back'
            card2front='Card 2 Front' card2back='Card 2 Back'
            card3front='Card 3 Front' card3back='Card 3 Back'
            card4front='Card 4 Front' card4back='Card 4 Back'
            card5front='Card 5 Front' card5back='Card 5 Back'
            card6front='Card 6 Front' card6back='Card 6 Back'>
          </Gridmaincards>

          <Gridmainbar like="Like" email1="Email" email2="Friends" share="Share">
          </Gridmainbar>

      </div>
    )
  }
}
