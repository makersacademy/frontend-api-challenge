import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr, setup } from '../../util/testUtils';
import NavBar from './NavBar';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<NavBar />', () => {
    let wrapper;
    let navBarComponent;

    beforeEach(() => {
        wrapper = setup(NavBar);
        navBarComponent = findByTestAttr(wrapper, 'component-navbar');
    });

    it('renders without crashing', () => {
        expect(navBarComponent).toHaveLength(1);
    });

    it('it renders navigation links for Main Feed and My Profile', () => {
        const navLinks = findByTestAttr(wrapper, 'component-nav-item');
        expect(navLinks).toHaveLength(2);
    });
});
