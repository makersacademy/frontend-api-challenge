import React from 'react'

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
      body: this.state.body
    }
    this.setState({
       body: ''
      });
    this.props.onSubmit(peep);
  }

  handlePeepChange = (e) => {
    e.preventDefault()
    this.setState({
       body: e.target.value
      });
  }

  render() {
    return (
      <div className="form-group">
        <form onSubmit={this.onSubmit}>
          <label htmlFor="peep-body">Peep</label>
          <textarea
            id="peep-body"
            className="form-control"
            value={this.state.body}
            onChange={this.handlePeepChange}
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

export default PeepForm
