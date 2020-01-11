import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr, setup } from '../../util/testUtils';
import NavItem from './NavItem';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<App />', () => {
	let wrapper;
	let navItemComponent;

	beforeEach(() => {
		wrapper = setup(NavItem, { link: '/' });
		navItemComponent = findByTestAttr(wrapper, 'component-nav-item');
	});

	it('renders without crashing', () => {
		expect(navItemComponent).toHaveLength(1);
	});
});
