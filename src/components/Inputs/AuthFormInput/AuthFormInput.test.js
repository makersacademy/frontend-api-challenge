import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr, setup } from '../../../util/testUtils';
import AuthFormInput from './AuthFormInput';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<AuthFormInput />', () => {
  let wrapper;
  let authFormInputComponent;

  beforeEach(() => {
    wrapper = setup(AuthFormInput, { name: 'email', type: 'email', placeholder: 'Enter your email', value: '', });
    authFormInputComponent = findByTestAttr(wrapper, 'component-auth-form-input');
  });

  it('renders without crashing', () => {
    expect(authFormInputComponent).toHaveLength(1);
  });

  it('renders an input field', () => {
    expect(wrapper.type()).toEqual('input');
  })

  it('takes a prop for its type', () => {
    expect(wrapper.props().type).toEqual('email');
  });

  it('takes a prop for its placeholder', () => {
    expect(wrapper.props().placeholder).toEqual('Enter your email');
  });

  it('has an initial value of an empty string', () => {
    expect(wrapper.props().value).toEqual('');
  });
});