import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr, setup } from '../../util/testUtils';
import PeepBox from './PeepBox';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<PeepBox />', () => {
	let wrapper;
	let peepBoxComponent;

	beforeEach(() => {
		wrapper = setup(PeepBox, { link: '/' });
		peepBoxComponent = findByTestAttr(wrapper, 'component-peep-box');
	});

	it('renders without crashing', () => {
		expect(peepBoxComponent).toHaveLength(1);
    });
    
    it('renders a text area', () => {
        const textArea = findByTestAttr(wrapper, 'text-area');
        expect(textArea).toHaveLength(1);
    });
});
