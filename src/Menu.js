import React from 'react';
import './App.css';
import fetch from 'node-fetch';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      user: this.props.user
    };
  }

  ul (index){
  	var underlines = document.querySelectorAll(".underline");
  	for (var i = 0; i < underlines.length; i++) {
  		underlines[i].style.transform = 'translate3d(' + index * 100 + '%,0,0)';
  	}
  }

  render() {
    console.log(this.state.user)
      if (this.state.user) {
        return (<nav className="retro">
          <div className="underline"></div>
          <div className="underline"></div>
          <div className="underline"></div>
          <div className="topnav">
            <div className="home_button" onClick={this.ul.bind(this, 0)}>Home</div>
            <div className="view_profile_button" onClick={this.ul.bind(this, 1)}>Your Peeps</div>
            <div className="topnav-right">
              <LogInButton parentCallback = {this.props.parentCallback} />
              <div className="sign_up_button" >Sign Up</div>
            </div>
          </div>
        </nav>)
      }
      else {
        return (<nav className="retro">
          <div className="underline"></div>
          <div className="underline"></div>
          <div className="underline"></div>
          <div className="topnav">
            <div className="home_button" onClick={this.ul.bind(this, 0)}>Home</div>
            <div className="view_profile_button" onClick={this.ul.bind(this, 1)}>Your Peeps</div>
            <div className="topnav-right">
              <div className="log_out_button" >Log Out</div>
            </div>
          </div>
        </nav>)

      }
  }
}

class LogInButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      user: [],
      isOpen: false
    };
  }

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });


  render() {
    if (!this.state.isOpen) {
      return <div className = "log_in_button" onClick={this.toggleOpen.bind(this)}>
        Log In
      </div>
    }
    else {
      return <LogInWindow parentCallback = {this.props.parentCallback} onClick={this.toggleOpen.bind(this)}/>
    }
  }
}

class LogInWindow extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = { value1: '', value2: '', user: '' };
  }

  handleChange1(e) {
    this.setState({ value1: e.target.value });
  }
  handleChange2(e) {
    this.setState({ value2: e.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.value1)
    console.log(this.state.value2)
    fetch("https://chitter-backend-api.herokuapp.com/sessions", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({"session": {"handle":this.state.value1, "password":this.state.value2}})})
    .then(res => res.json())
    .then(json => this.setState({user: json}))
    .then(json => this.sendData())
    .then(json => this.props.onClick())
  }

  sendData = () => {
    this.props.parentCallback(this.state.user);
    console.log(this.state.user)
  }

  render() {

    const { value1 } = this.state;
    const { value2 } = this.state;

    return (
      <form className='logInFloatWindow'>
        <label>
          Handle:
          <input type="text" value={this.state.value1} onChange={this.handleChange1} />
        </label><br />
        <label>
          Password:
          <input type="password" value={this.state.value2} onChange={this.handleChange2} />
        </label><br />
        <button type="submit" onClick={this.handleSubmit}>
          Log In
        </button>
      </form>
    );
  }
}

export default Menu;
