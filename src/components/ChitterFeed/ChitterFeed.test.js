import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import axios from '../../axios-chitter';
import moxios from 'moxios';
import { findByTestAttr, setup } from '../../util/testUtils';
import { getPeeps } from '../../util/jsonDoubles';
import ChitterFeed from './ChitterFeed';
import JestMock from 'jest-mock';

Enzyme.configure({ adapter: new EnzymeAdapter() });
// jest.mock('axios');

describe('<ChitterFeed />', () => {
    let wrapper;
    let chitterFeedComponent;

    beforeEach(() => {
        wrapper = setup(ChitterFeed);
        chitterFeedComponent = findByTestAttr(wrapper, 'component-chitter-feed');
    });

    it('renders without crashing', () => {
        expect(chitterFeedComponent).toHaveLength(1);
    });

    it('renders a list of Peeps', () => {
        wrapper = setup(ChitterFeed, null, { peepData: getPeeps() });
        const peeps = findByTestAttr(wrapper, 'component-peep');
        expect(peeps).toHaveLength(50);
    });

    // fix this test... make it work properly.
    describe('GET /peeps', () => {
        beforeEach(() => {
            moxios.install();
        });

        afterEach(() => {
            moxios.uninstall();
        });
    });  
});

