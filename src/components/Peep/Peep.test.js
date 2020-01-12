import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr, setup } from '../../util/testUtils';
import Peep from './Peep';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<Peep />', () => {
    let wrapper;
    let peepComponent;

    beforeEach(() => {
        wrapper = setup(Peep);
        peepComponent = findByTestAttr(wrapper, 'component-peep');
    });

    it('renders without crashing', () => {
        expect(peepComponent).toHaveLength(1);
    });
});
