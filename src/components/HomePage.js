import React from 'react'
import Feed from './Feed'
import PeepForm from './PeepForm'
import { connect } from 'react-redux'
import { addPeep } from '../actions/peeps'


export class HomePage extends React.Component {

  onSubmit = (peep) => {
    this.props.addPeep(peep)
    this.props.history.push('/')
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
  addPeep: (peep) => dispatch(addPeep(peep))
})

export default connect(undefined, mapDispatchToProps)(HomePage)
