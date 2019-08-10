import React from 'react';
import './App.css';
import fetch from 'node-fetch';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      user: []
    };
  }

  ul (index){
  	var underlines = document.querySelectorAll(".underline");
  	for (var i = 0; i < underlines.length; i++) {
  		underlines[i].style.transform = 'translate3d(' + index * 100 + '%,0,0)';
  	}
  }

  render() {
    return (

      <nav className="retro">
        <div className="underline"></div>
        <div className="underline"></div>
        <div className="underline"></div>
        <div className="topnav">
          <div className="home_button" onClick={this.ul.bind(this, 0)}>Home</div>
          <div className="view_profile_button" onClick={this.ul.bind(this, 1)}>Your Peeps</div>
          <div className="topnav-right">
            <LogInButton parentCallback = {this.props.parentCallback} />
            <div className="sign_up_button" >Sign Up</div>
            <div className="log_out_button" >Log Out</div>
          </div>
        </div>
      </nav>
    )
  }
}

class LogInButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      user: [],
      isOpen: true
    };
  }

  render() {
    return (
      <Dropdown className = "log_in_button">
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">Log In</Dropdown.Toggle>
        <Dropdown.Menu as={CustomMenu} parentCallback = {this.props.parentCallback}>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}

class CustomToggle extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.props.onClick(e);
  }

  render() {
    return (
      <a href="" onClick={this.handleClick}>
        {this.props.children}
      </a>
    );
  }
}

class CustomMenu extends React.Component {
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
  }

  sendData = () => {
    this.props.parentCallback(this.state.user);
    console.log('logged in')
  }

  render() {
    const {
      children,
      style,
      'aria-labelledby': labeledBy,
    } = this.props;

    const { value1 } = this.state;
    const { value2 } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Handle: </Form.Label>
          <Form.Control placeholder="Enter handle" value={value1} onChange={this.handleChange1} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password: </Form.Label>
          <Form.Control type="password" placeholder="Password" value={value2} onChange={this.handleChange2} />
        </Form.Group>
        <Button type="submit">
          Log In
        </Button>
      </Form>
    );
  }
}

export default Menu;
