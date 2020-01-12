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

    it('renders an image', () => {
        const image = findByTestAttr(wrapper, 'user-image');
        expect(image).toHaveLength(1);
    });

    it('renders the user handle', () => {
        const handle = findByTestAttr(wrapper, 'user-handle');
        expect(handle).toHaveLength(1);
    });

    it('renders the peep body', () => {
        const body = findByTestAttr(wrapper, 'peep-body');
        expect(body).toHaveLength(1);
    });

    it('render the dtate on which it was created', () => {
        const peepedOn = findByTestAttr(wrapper, 'peeped-on');
        expect(peepedOn).toHaveLength(1);
    })

    it('renders the number of luvs', () => {
        const luvs = findByTestAttr(wrapper, 'number-of-luvs');
        expect(luvs).toHaveLength(1);
    });
});
