import React from 'react';
import Classes from './AuthForm.module.css';
import AuthFormInput from '../Inputs/AuthFormInput/AuthFormInput';

class AuthForm extends React.Component {
  state = {
    formFields: [
      { name: 'handle', placeholder: 'Enter your handle', type: 'text', validation: {} },
      { name: 'password', placeholder: 'Enter your password', type: 'password', validation: {} },
      { name: 'newHandle', placeholder: 'Enter your new handle', type: 'text', validation: {} },
      { name: 'newPassword', placeholder: 'Enter your new password', type: 'new-password', validation: {} },
      { name: 'confirmNewPassword', placeholder: 'Confirm your new password', type: 'new-password', validation: {} },
    ],
  }

  renderInputs = () => {
    const currentFields = [ ...this.state.formFields ];
    const selectedFields = this.props.isSignUp ? [currentFields[2], currentFields[3], currentFields[4]] : [currentFields[0], currentFields[1]];
    return selectedFields.map((field, i) => {
      return <AuthFormInput
        key={`id_${i}_${field.nameå}`}
        placeholder={field.placeholder}
        name={field.name}
        type={field.type}
        validation={field.validation}
      />
    });
  }

  render() {
    const form = this.renderInputs();

    return (
      <div className={Classes.AuthForm} data-test='component-auth-form'>
        {form}
      </div>
    );
  }
}

export default AuthForm;
