import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr, setup } from '../../util/testUtils';
import MainFeed from './MainFeed';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<MainFeed />', () => {
  let wrapper;
  let mainFeedComponent;

  beforeEach(() => {
    wrapper = setup(MainFeed);
    mainFeedComponent = findByTestAttr(wrapper, 'component-main-feed');
  });

  it('renders without crashing', () => {
    expect(mainFeedComponent).toHaveLength(1);
  });

  it('renders a navbar', () => {
    const navbar = findByTestAttr(wrapper, 'component-navbar');
    expect(navbar).toHaveLength(1);
  });

  it('renders a main view', () => {
    const main = findByTestAttr(wrapper, 'component-main');
    expect(main).toHaveLength(1);
  });

  it('renders a new peep input field', () => {
    const newPeep = findByTestAttr(wrapper, 'component-new-peep');
    expect(newPeep).toHaveLength(1);
  });
});
