import React from 'react';
import './App.css';


class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      user_handle: '',
      logIn: false,
      signUp: false,
    };

    this.setUserHandle = this.setUserHandle.bind(this)

  }

  componentDidUpdate(prevProps) {
    if (this.props.user !== false && prevProps.user === false) {
      this.setState({user: this.props.user});
    }
  }

  changeUser(user) {
    console.log(user)
    this.setState({user: user})
  }

  changeLogIn(state) {
    this.setState({logIn: state})
    if (this.state.signUp === true && state === true){
      this.setState({signUp: false})
    }
  }

  changeSignUp(state) {
    this.setState({signUp: state})
    if (this.state.logIn === true && state === true){
      this.setState({logIn: false})
    }
  }

  ul (index){
  	var underlines = document.querySelectorAll(".underline");
  	for (var i = 0; i < underlines.length; i++) {
  		underlines[i].style.transform = 'translate3d(' + index * 100 + '%,0,0)';
  	}
    this.props.changeList(index)
  }

  setUserHandle(userHandle){
    this.setState({user_handle: userHandle})
  }

  render() {
      if (!this.props.user) {
        return (<nav className="retro">
          <div className="underline"></div>
          <div className="underline"></div>
          <div className="underline"></div>
          <div className="topnav">
            <div className="home_button" onClick={this.ul.bind(this, 0)}>Home</div>
            <div className="topnav-right">
              <LogInButton changeLogIn={this.changeLogIn.bind(this)} logIn={this.state.logIn} changeUser={this.changeUser} setUserHandle={this.setUserHandle} parentCallback = {this.props.parentCallback} />
              <SignUpButton changeSignUp={this.changeSignUp.bind(this)} signUp={this.state.signUp} changeUser={this.changeUser} setUserHandle={this.setUserHandle} parentCallback = {this.props.parentCallback} />
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
              <div className="Welcome" >Welcome {this.state.user_handle}!</div>
              <div className="log_out_button" onClick={this.props.logOut}>Log Out</div>
            </div>
          </div>
        </nav>)

      }
  }
}

class SignUpButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      user: [],
      isOpen: false,
    };
  }

  toggleOpen(){
    this.props.changeSignUp(!this.state.isOpen)
  }

  componentDidUpdate(prevProps) {
    console.log(this.props.signUp)
    console.log(prevProps.signUp)
    if(this.props.signUp === true && prevProps.signUp === false){
      this.setState({isOpen: true});
    } else if (this.props.signUp === false && prevProps.signUp === true){
      this.setState({isOpen: false});
    }
    console.log(this.state.isOpen)
  }

  render() {
    if (!this.state.isOpen) {
      return <div className = "log_in_button" onClick={this.toggleOpen.bind(this)}>
        Sign Up
      </div>
    }
    else {
      return <SignUpWindow setUserHandle={this.props.setUserHandle} changeUser={this.props.changeUser} parentCallback = {this.props.parentCallback} onClick={this.toggleOpen.bind(this)}/>
    }
  }
}

class SignUpWindow extends React.Component {
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
    event.stopPropagation();
    event.preventDefault();
    this.props.setUserHandle(this.state.value1)
    fetch("https://chitter-backend-api.herokuapp.com/users", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({"user": {"handle":this.state.value1, "password":this.state.value2}})})
    .then(this.logIn())
  }

  handleChildClick = (e) => {
    e.stopPropagation();
  }

  logIn = () => {
    this.props.setUserHandle(this.state.value1);
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

    return (
      <form className='signUpFloatWindow' onClick={this.props.onClick}>
      <h3>Please Sign Up</h3>
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

class LogInButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      user: [],
      isOpen: false,
    };
  }



  toggleOpen(){
    this.props.changeLogIn(!this.state.isOpen)
  }

  componentDidUpdate(prevProps) {
    console.log(this.props.logIn)
    console.log(prevProps.logIn)
    if(this.props.logIn === true && prevProps.logIn === false){
      this.setState({isOpen: true});
    } else if (this.props.logIn === false && prevProps.logIn === true){
      this.setState({isOpen: false});
    }
    console.log(this.state.isOpen)
  }

  render() {
    if (!this.state.isOpen) {
      return <div className = "log_in_button" onClick={this.toggleOpen.bind(this)}>
        Log In
      </div>
    }
    else {
      return <LogInWindow setUserHandle={this.props.setUserHandle} changeUser={this.props.changeUser} parentCallback = {this.props.parentCallback} onClick={this.toggleOpen.bind(this)}/>
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

export default Menu;
