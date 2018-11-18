import React from 'react'
import { connect } from 'react-redux'
import Peep from './Peep'
import { startLikePeep } from '../actions/peeps'


export class Feed extends React.Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     peeps = props.peeps
  //   }
  // }

  handleLike = (id) => {
    const x = this.props.startLikePeep(id)
    console.log(x)
  }

  render() {
    let insert;
    if (this.props.peeps === undefined || this.props.peeps.length == 0) {
      insert = <p>No peeps yet!</p>
    } else {
      insert = this.props.peeps.map((peep) => <Peep key={peep.id} peep={peep} handleLike={this.handleLike}/>)
    }
    return (
      <div>
        <h1>Feed</h1>
        <ul>
          {insert}
        </ul>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    peeps: state.peeps
  }
}

const mapDispatchToProps = (dispatch) => ({
  startLikePeep: (id) => dispatch(startLikePeep(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
