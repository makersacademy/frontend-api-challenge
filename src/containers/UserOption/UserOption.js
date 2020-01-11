import React from 'react';
import Classes from './UserOption.module.css';
import AuthForm from '../../components/AuthForm/AuthForm';

class UserOption extends React.Component {
  render() {
    const isSignUp = this.props.option === 'Sign Up'
    let form = null;

    if (this.props.active) form = <AuthForm isSignUp={isSignUp}/>;

    return (
      <div className={Classes.UserOption} data-test='component-user-option'>
        <button data-test={isSignUp ? 'sign-up-button' : 'sign-in-button'} onClick={this.props.onClick}>{this.props.option}</button>
        {form}
      </div>
    );
  }
}

export default UserOption;
