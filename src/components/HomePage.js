import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Feed from './Feed'
import PeepForm from './PeepForm'
import { startAddPeep } from '../actions/peeps'


export class HomePage extends React.Component {

  onSubmit = (peep) => {
    this.props.startAddPeep(peep)
    this.props.history.push('/homepage')
  }

  render() {
    return (
      <div className="container">
        <h1>Chitter</h1>
        <PeepForm onSubmit={this.onSubmit}/>
        <Feed />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  startAddPeep: (peep) => dispatch(startAddPeep(peep))
})

export default connect(undefined, mapDispatchToProps)(HomePage)
