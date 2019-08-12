import React from 'react';
import '../styles/App.css';

class LogInWindow extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = { value1: '', value2: '', user: '' };
  }

  handleChildClick = (e) => {
    e.stopPropagation();
  }

  handleChange1(e) {
    this.setState({ value1: e.target.value });
  }
  handleChange2(e) {
    this.setState({ value2: e.target.value });
  }

  handleSubmit(event) {
    event.stopPropagation();
    event.preventDefault();
    this.props.setUserHandle(this.state.value1)
    fetch("https://chitter-backend-api.herokuapp.com/sessions", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({"session": {"handle":this.state.value1, "password":this.state.value2}})})
    .then(function(response) {
      if (!response.ok) {
          console.log(response)
          throw new Error('Log in details incorrect...')
      } else {
        return response.json()
      }
    })
    .then(json => this.setState({user: json}))
    .then(json => this.sendData())
    .then(json => this.props.onClick())
    .catch(err => alert(err))
  }

  sendData = () => {
    this.props.parentCallback(this.state.user);
  }

  render() {
    return (
      <form className='logInFloatWindow' onClick={this.props.onClick}>
      <h3>Please Log In</h3>
        <label>
          Handle:
          <input type="text" onClick={this.handleChildClick.bind(this)} value={this.state.value1} onChange={this.handleChange1} />
        </label><br />
        <label>
          Password:
          <input type="password" onClick={this.handleChildClick.bind(this)} value={this.state.value2} onChange={this.handleChange2} />
        </label><br />
        <button type="submit" onClick={this.handleSubmit}>
          Log In
        </button>
      </form>
    );
  }
}

export default LogInWindow;
