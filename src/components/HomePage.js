import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Feed from './Feed'
import PeepForm from './PeepForm'
import { startAddPeep, startRemovePeep, startLikePeep } from '../actions/peeps'


export class HomePage extends React.Component {

  onSubmit = (peep) => {
    this.props.startAddPeep(peep)
    // this.props.history.push('/homepage')
  }

  // onLikePeep = (id) => {
  //   this.props.startLikePeep(id).then(user => user)
  // }

  onUnLikePeep = (id) => {
    this.props.startUnLikePeep(id).then(user => user)
  }

  onRemovePeep = (id) => {
    this.props.startRemovePeep(id)
  }

  render() {
    return (
      <div className="container">
        <h1>Chitter</h1>
        <PeepForm onSubmit={this.onSubmit} />
        <Feed
          // onLikePeep={this.onLikePeep}
          onUnLikePeep={this.onUnLikePeep}
          onRemovePeep={this.onRemovePeep}/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  startAddPeep: peep => dispatch(startAddPeep(peep)),
  startRemovePeep: id => dispatch(startRemovePeep(id)),
  // startLikePeep: id => dispatch(startLikePeep(id)),
  startLikePeep: id => dispatch(startLikePeep(id))
})

export default connect(undefined, mapDispatchToProps)(HomePage)
