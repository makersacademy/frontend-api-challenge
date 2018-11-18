import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Feed from './Feed'
import PeepForm from './PeepForm'
import { startAddPeep } from '../actions/peeps'


export class HomePage extends React.Component {

  onSubmit = (peep) => {
    this.props.startAddPeep(peep)
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="container">
        <h1>Chitter</h1>
        <Link to="/users/new">Register</Link>
        <PeepForm onSubmit={this.onSubmit}/>
        <Feed />
      </div>
    )
  }
}

// const mapStateToProps = (state, props) => ({
//   session: state.sessions
// })

const mapDispatchToProps = (dispatch, props) => ({
  startAddPeep: (peep) => dispatch(startAddPeep(peep))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
