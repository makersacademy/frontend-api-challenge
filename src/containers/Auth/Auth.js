import React from 'react';
import Classes from './Auth.module.css';
import UserOption from '../UserOption/UserOption';

class Auth extends React.Component {
  state = {
    isSignIn: false,
    isSignUp: false,
  }

  handleClick = option => {
    switch (option) {
      case 'Sign In' : this.setState({ isSignIn: true, isSignUp: false }); break;
      case 'Sign Up' : this.setState({ isSignIn: false, isSignUp: true }); break;
      default : return false;
    }
  }
  render() {
    return (
      <div className={Classes.Auth} data-test='component-auth'>
        <h1 className='title'>Chitter</h1>
        <UserOption 
          data-test='component-user-option-sign-in' 
          active={this.state.isSignIn}
          onClick={() => this.handleClick('Sign In')}
          option='Sign In' />
        <UserOption 
          data-test='component-user-option-sign-up' 
          active={this.state.isSignUp}
          onClick={() => this.handleClick('Sign Up')}
          option='Sign Up' />
      </div>
    );
  }
}

export default Auth;
