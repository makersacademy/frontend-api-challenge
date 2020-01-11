import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr, setup } from '../../util/testUtils';
import Auth from './Auth';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<App />', () => {
	let wrapper;
	let authComponent;

	beforeEach(() => {
		wrapper = setup(Auth);
		authComponent = findByTestAttr(wrapper, 'component-auth');
	});

	it('renders without crashing', () => {
		expect(authComponent).toHaveLength(1);
	});


	it('displays the app name', () => {
		expect(authComponent.text()).toContain('Chitter');
	});

	it('displays sign up and sign in user options', () => {
		const userOptionSignIn = findByTestAttr(wrapper, 'component-user-option-sign-in');
		const userOptionSignUp = findByTestAttr(wrapper, 'component-user-option-sign-up');
		const userOptionsLength = userOptionSignIn.length + userOptionSignUp.length;

		expect(userOptionsLength).toBe(2);
	});
});
