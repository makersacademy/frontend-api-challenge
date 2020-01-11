import React from 'react';
import Classes from './AuthFormInput.module.css';

const AuthFormInput = props => {
  return <input data-test='component-auth-form-input' type={props.type} placeholder={props.placeholder}></input>;
}

export default AuthFormInput;
