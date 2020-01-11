import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr, setup } from '../../util/testUtils';
import AuthForm from './AuthForm';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<AuthForm />', () => {
  let wrapper;
  let authFormComponent;
  let authForm = [
    { name: 'handle', placeholder: 'Enter your handle', type: 'text', validation: {} },
    { name: 'password', placeholder: 'Enter your password', type: 'password', validation: {} },
    { name: 'newHandle', placeholder: 'Enter your new handle', type: 'text', validation: {} },
    { name: 'newPassword', placeholder: 'Enter your new password', type: 'new-password', validation: {} },
    { name: 'confirmNewPassword', placeholder: 'Confirm your new password', type: 'new-password', validation: {} },
  ];

  beforeEach(() => {
    wrapper = setup(AuthForm);
    authFormComponent = findByTestAttr(wrapper, 'component-auth-form');
  });

  it('renders without crashing', () => {
    expect(authFormComponent).toHaveLength(1);
  });

  it('renders the correct input fields for the user if they choose to sign up', () => {
    const signUpWrapper = setup(AuthForm, { isSignUp: true }, { authForm });

    expect(signUpWrapper.text()).toContain('Enter your new handle');
    expect(signUpWrapper.text()).toContain('Enter your new password');
    expect(signUpWrapper.text()).toContain('Confirm your new password');

    expect(signUpWrapper.text()).not.toContain('Enter your handle');
    expect(signUpWrapper.text()).not.toContain('Enter your password');
  });

  it('renders the correct input fields for the user if they choose to sign in', () => {
    const signInWrapper = setup(AuthForm, { isSignUp: false }, { formFields: authForm });

    expect(signInWrapper.text()).toContain('Enter your handle');
    expect(signInWrapper.text()).toContain('Enter your password');

    expect(signInWrapper.text()).not.toContain('Enter your new handle');
    expect(signInWrapper.text()).not.toContain('Enter your new password');
    expect(signInWrapper.text()).not.toContain('Confirm your new password');
  });
});