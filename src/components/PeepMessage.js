import React, { Component } from 'react';

class PeepMessage extends Component {



  render() {
    return (
      <div>
        <p>
        <input type="checkbox" onChange={this.props.like.bind(this, this.props.peep.id)}/>
        {this.props.peep.created_at.replace('T', ' ').slice(0,19)} ~ {this.props.peep.user.handle}: {this.props.peep.body} ~ likes: {this.props.peep.likes.length}
        </p>
      </div>
    );
  }
}


export default PeepMessage ;
//Peep is an object with keys {id, body, created_at, updated_at, user, likes})
