import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/sessions'

export class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      handle: '',
      password:''
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
    const auth = {
      handle: this.state.handle,
      password: this.state.password
    }
    this.props.startLogin(auth)
    this.props.history.push('/homepage')
  }

  render() {
    return (
      <div className="container">
        <h1>Login</h1>
        <p>It's time to start peeping.</p>
        <div className="form-group">
          <form onSubmit={this.onSubmit}>
            <label
              htmlFor="handle">
                Handle
            </label>
              <input
                id="handle"
                className="form-control"
                value={this.state.handle}
                onChange={this.handleHandleChange}
                />
            <label
              htmlFor="password">
                Password
            </label>
              <input
                id="password"
                className="form-control"
                type="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
                />
              <button
                className="btn btn-success float-right">
                  Login
              </button>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  startLogin: (auth) => dispatch(startLogin(auth))
})

export default connect(undefined, mapDispatchToProps)(LoginPage)
