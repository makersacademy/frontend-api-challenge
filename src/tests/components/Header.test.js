import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header'
import peeps from '../fixtures/peeps'

let wrapper

beforeEach(() => {
  wrapper = shallow(<Header />)
})

test('should render Feed correctly', () => {
  expect(wrapper).toMatchSnapshot();
})
