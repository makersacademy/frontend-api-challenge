import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr, setup } from '../../util/testUtils';
import UserOption from './UserOption';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<UserOption />', () => {
  let wrapper;
  let userOptionComponent;

  beforeEach(() => {
    wrapper = setup(UserOption);
    userOptionComponent = findByTestAttr(wrapper, 'component-user-option');
  });

  it('renders without crashing', () => {
    expect(userOptionComponent).toHaveLength(1);
  });

  it('can reveal a sign in form', () => {
    const signInButton = findByTestAttr(wrapper, 'sign-in-button');
    signInButton.simulate('click');
    expect(wrapper.text()).toContain('Enter your handle');
  })
})