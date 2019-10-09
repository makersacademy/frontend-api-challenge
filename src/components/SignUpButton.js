import React from 'react';
import '../styles/App.css';
import SignUpWindow from './SignUpWindow'

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
    if(this.props.signUp === true && prevProps.signUp === false){
      this.setState({isOpen: true});
    } else if (this.props.signUp === false && prevProps.signUp === true){
      this.setState({isOpen: false});
    }
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

export default SignUpButton;
