import React from 'react'
import { connect } from 'react-redux'
import Like from './Like'

export class Peep extends React.Component {

  handleRemovePeep = () => {
    this.props.handleRemovePeep(this.props.peep.id)
  }

  render() {
    return (
      <div className="border">
        <p>#{this.props.peep.user.handle} @ {this.props.peep.created_at}</p>
        <p>{this.props.peep.body}</p>
        <Like
          id={this.props.peep.id}
          likes={this.props.peep.likes} />
        <button
          onClick={this.handleRemovePeep}>Delete</button>
      </div>
    )
  }
}

export default Peep
