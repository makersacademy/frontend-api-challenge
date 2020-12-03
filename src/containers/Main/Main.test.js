import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr, setup } from '../../util/testUtils';
import Main from './Main';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<Main />', () => {
    let wrapper;
    let mainComponent;

    beforeEach(() => {
        wrapper = setup(Main);
        mainComponent = findByTestAttr(wrapper, 'component-main');
    });

    it('renders without crashing', () => {
        expect(mainComponent).toHaveLength(1);
    });

    it('renders a Chitter Feed', () => {
        const chitterFeed = findByTestAttr(wrapper, 'component-chitter-feed');
        expect(chitterFeed).toHaveLength(1);
    });

    it('can render a profile widget when on the users profile page', () => {
        wrapper = setup(Main, { isProfile: true });
        const profileWidget = findByTestAttr(wrapper, 'component-profile-widget');
        expect(profileWidget).toHaveLength(1);
    });

    it('should not render a profile widget when displaying the main feed', () => {
        const profileWidget = findByTestAttr(wrapper, 'component-profile-widget');
        expect(profileWidget).toHaveLength(0);
    });
});
