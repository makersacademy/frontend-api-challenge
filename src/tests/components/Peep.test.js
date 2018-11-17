import React from 'react';
import { shallow } from 'enzyme';
import { Peep } from '../../components/Peep'
import peeps from '../fixtures/peeps'

let wrapper

beforeEach(() => {
  wrapper = shallow(<Peep peep={peeps[0]}/>)
})

test('should render Feed correctly', () => {
  expect(wrapper).toMatchSnapshot();
})
