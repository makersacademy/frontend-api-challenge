import React, { Component } from 'react';
import PeepMessage from './PeepMessage.js';

class Peeps extends Component {
  render() {
    return this.props.peeps.map((peep) => (
      <PeepMessage key={peep.id} peep={peep} />
    ));
  }
}

export default Peeps;


//Peep is an object with keys {id, body, created_at, updated_at, user, likes})
