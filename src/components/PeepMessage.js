import React, { Component } from 'react';

class PeepMessage extends Component {

  render() {
    return (
      <div>
        <p>{this.props.peep.body}</p>
      </div>
    );
  }

}

export default PeepMessage ;
