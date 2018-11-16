import React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from '../../components/HomePage'

const wrapper = shallow(<HomePage />)

test('should render HomePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
})
