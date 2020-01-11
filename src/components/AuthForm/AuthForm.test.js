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

    describe('<Authform /> elements', () => {
        const signUpWrapper = setup(AuthForm, { isSignUp: true }, { formFields: authForm });
        const signInWrapper = setup(AuthForm, { isSignUp: false }, { formFields: authForm });

        it('renders the three correct input fields for the user if they choose to sign up', () => {
        const formInputs = signUpWrapper.find('AuthFormInput');
        expect(formInputs).toHaveLength(3);
        });

        it('renders the two correct input fields for the user if they choose to sign in', () => {
        const formInputs = signInWrapper.find('AuthFormInput');
        expect(formInputs).toHaveLength(2);
        });

        it('renders a submit button with a relevant string', () => {
        const button = findByTestAttr(wrapper, 'submit-button');
        expect(button.text()).toContain('Submit');
        });
    });
});
