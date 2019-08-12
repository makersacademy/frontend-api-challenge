import React from 'react';
import '../styles/App.css';
import SignUpButton from './SignUpButton'
import LogInButton from './LogInButton'

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

export default Menu;
