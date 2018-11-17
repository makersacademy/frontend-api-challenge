import React from 'react'
import { connect } from 'react-redux'
import { addPeep } from '../actions/peeps'

export class PeepForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      body: ''
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    let peep = {
      body: e.target['peep-body'].value
    }
    this.props.addPeep(peep)
  }

  render() {
    return (
      <div className="form-group">
        <form onSubmit={this.onSubmit}>
          <label htmlFor="peep-body">Peep</label>
          <textarea
            id="peep-body"
            className="form-control"
            defaultValue={this.state.body}
            required>
          </textarea>
          <button
            className="btn btn-success float-right">
            Submit
          </button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  addPeep: (peep) => dispatch(addPeep(peep))
})

export default connect(undefined, mapDispatchToProps)(PeepForm)
