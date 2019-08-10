import React from 'react';
import './App.css';
import fetch from 'node-fetch';
import { CSSTransitionGroup } from 'react-transition-group';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function App() {

    return (
      <div>
      <Chitter />
      </div>
    )

}

class Chitter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      user: []
    };
  }

  callbackFunction = (childData) => {
    this.setState({user: childData})
  }

  render() {
    return (
      <div>
      <Menu parentCallback = {this.callbackFunction} />
      <Peeps user={this.state.user}/>
      </div>
    )
  }
}

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
      user: []
    };
  }

  sendData = () => {
    this.props.parentCallback(this.state.user);
    console.log('logged in')
  }

  componentDidMount() {
    fetch("https://chitter-backend-api.herokuapp.com/sessions", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({"session": {"handle":"chuckles", "password":"mypassword"}})})
    .then(res => res.json())
    .then(json => this.setState({user: json}))
  }

  render() {
    return (
      <Dropdown className = "log_in_button">
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
          Log In
        </Dropdown.Toggle>
        <Dropdown.Menu as={CustomMenu}>
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

    this.state = { value1: '', value2: '' };
  }

  handleChange1(e) {
    this.setState({ value1: e.target.value });
  }
  handleChange2(e) {
    this.setState({ value2: e.target.value });
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
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Handle: </Form.Label>
          <Form.Control type="email" placeholder="Enter handle" value={value1} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password: </Form.Label>
          <Form.Control type="password" placeholder="Password" value={value2} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Log In
        </Button>
      </Form>
    );
  }
}

class Peeps extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [{user: {}, likes: {}}]
    };
    this.callbackFunction = this.callbackFunction.bind(this)
  }

  componentWillMount() {
    console.log('reload')
    fetch('https://chitter-backend-api.herokuapp.com/peeps')
      .then(res => res.json())
      .then(json => this.setState({hits: json}))
      console.log(this.state.hits)
  }

  callbackFunction() {
    fetch('https://chitter-backend-api.herokuapp.com/peeps')
      .then(res => res.json())
      .then(json => this.setState({hits: json}))
  }

  render() {
    return (
      <div className='Peep_List'>
        <PostNewPeep parentCallback = {this.callbackFunction} user ={this.props.user} />
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {this.state.hits.map(function(peep, index){
            return <Peep data={peep} key={peep.id} />;
          })}
        </CSSTransitionGroup>
      </div>
    )
  }
}

class Peep extends React.Component {
  constructor(props) {
    super(props);

    this.Peep = props.data
  }

  render() {
    var date = new Date(this.Peep.created_at);

    return (
      <div className = 'Peep'><header className = 'PeepHeader'>
        <p>{this.Peep.user.handle}</p></header>
        <p>{this.Peep.body}</p>
        <div className="PeepDate">{date.getDate()}/{date.getMonth()}/{date.getYear()}</div>
        <div className='PeepLikes'>Likes: {this.Peep.likes.length}</div>
      </div>
    )
  }
}

class PostNewPeep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      style: {background: '#d0f1f7', marginBottom: '30px'}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.props.user.user_id)
    console.log(this.state.value)
    console.log(this.props.user.session_key)
    fetch("https://chitter-backend-api.herokuapp.com/peeps", {
      method: 'POST',
      headers: {'Content-Type': 'application/json', "Authorization": "Token token=" + this.props.user.session_key },
      body: JSON.stringify({"peep": {"user_id":this.props.user.user_id, "body":this.state.value}}),
    }).then(res => console.log('its working'))
      .then(res => this.props.parentCallback())
      .then(res => this.setState({value: ''}))
      .then(res => console.log('it worked'));
      event.preventDefault();
  }

  render() {
    return (
      <div className = 'Peep' style = {this.state.style}>
        <header className = 'PeepHeader'>Post new peep
        </header>
        <form onSubmit={this.handleSubmit}>
          <label>
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input className='Post_Peep' type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
