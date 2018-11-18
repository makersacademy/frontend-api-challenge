import React from 'react';
import { connect } from 'react-redux'
import { startCreateUser } from '../actions/users'

export class RegistrationPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      handle: '',
      password: ''
    }
  }

  handleHandleChange = (e) => {
    this.setState({
      handle: e.target.value
    })
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const user = {
      handle: this.state.handle,
      password: this.state.password
    }
    this.props.startCreateUser(user)
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="form-group container">
      <h1>Registration</h1>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="handle">Handle</label>
            <input
              id="handle"
              className="form-control"
              value={this.state.handle}
              onChange={this.handleHandleChange}
              />
          <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="form-control"
              value={this.state.password}
              onChange={this.handlePasswordChange}
              />
          <button
            className="btn btn-success float-right">
              Register
          </button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => ({
    startCreateUser: (user) => dispatch(startCreateUser(user))
})

export default connect(undefined, mapDispatchToProps)(RegistrationPage)
