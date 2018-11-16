import React from 'react';
import { shallow } from 'enzyme';
import { Feed } from '../../components/Feed'
import peeps from '../fixtures/peeps'

let wrapper

beforeEach(() => {
  wrapper = shallow(<Feed peeps={peeps}/>)
})

test('should render Feed correctly', () => {
  expect(wrapper).toMatchSnapshot();
})
