import React from 'react'
import { connect } from 'react-redux'
import { startLikePeep, startUnlikePeep } from '../actions/peeps'

export class Like extends React.Component {

  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      likes: props.likes
    }
  }

  handleLike = () => {
    this.props.startLikePeep(this.props.id).then(user => {
      this.setState((prevState) => {
        return {
          likes: prevState.likes.concat({user})
        }
      })
    })
  }

  handleUnlike = () => {
    this.props.startUnlikePeep(this.props.id).then(() => {
      this.setState((prevState) => {
        return {
          likes: []
        }
      })
    })
  }

  render() {
    return (
      <div>
        likes: {this.props.likes.length}
        <p>liked: {this.state.liked}</p>
        <button onClick={this.handleLike}>👍</button>
        <button onClick={this.handleUnlike}>👎</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startLikePeep: (id) => dispatch(startLikePeep(id)),
  startUnlikePeep: (id) => dispatch(startUnlikePeep(id))
})

export default connect(undefined, mapDispatchToProps)(Like)
