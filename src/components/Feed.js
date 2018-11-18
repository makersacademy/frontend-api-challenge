import React from 'react'
import { connect } from 'react-redux'
import Peep from './Peep'
import { startLikePeep } from '../actions/peeps'


export class Feed extends React.Component {

  render() {
    let peeps;
    if (this.props.peeps === undefined || this.props.peeps.length == 0) {
      peeps = <p>No peeps yet!</p>
    } else {
      peeps = this.props.peeps.map((peep) => {
        return (
          <Peep
            key={peep.id}
            peep={peep}
            handleLikePeep={this.props.onLikePeep}
            handleRemovePeep={this.props.onRemovePeep}/>
        )
      })
    }
    return (
      <div>
        <h1>Feed</h1>
        <div>
          {peeps}
        </div>
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
