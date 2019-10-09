import React from 'react';
import '../styles/App.css';
import LogInWindow from './LogInWindow'

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
    if(this.props.logIn === true && prevProps.logIn === false){
      this.setState({isOpen: true});
    } else if (this.props.logIn === false && prevProps.logIn === true){
      this.setState({isOpen: false});
    }
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

export default LogInButton;
