import React from 'react'
import { connect } from 'react-redux'
import { startLikePeep } from '../actions/peeps'

export class Peep extends React.Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     likeCount: props.peep.likes.length
  //   }
  // }

  handleLike = () => {
    this.props.handleLike(this.props.peep.id)
    // this.setState((prevState) => {
    //   return {
    //     likeCount: prevState.likeCount += 1
    //   }
    // })
  }

  render() {
    return (
      <li className="border">
        <p>#{this.props.peep.user.handle} @ {this.props.peep.created_at}</p>
        <p>{this.props.peep.body}</p>
        <p>likes: {this.props.peep.likes.length}</p>
        <button onClick={this.handleLike}>👍</button>
      </li>
    )
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   startLikePeep: (id) => dispatch(startLikePeep(id))
// })

export default Peep
