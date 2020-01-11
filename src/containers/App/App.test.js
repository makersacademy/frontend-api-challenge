import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr, setup } from '../../util/testUtils';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<App />', () => {
    let wrapper;
    let appComponent;

    beforeEach(() => {
        wrapper = setup(App);
        appComponent = findByTestAttr(wrapper, 'component-app');
    });

    it('renders without crashing', () => {
        expect(appComponent).toHaveLength(1);
    });
});
