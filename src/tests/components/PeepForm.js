import React from 'react'
import { shallow } from 'enzyme'
import { PeepForm } from '../../components/PeepForm'

let wrapper

beforeEach(() => {
  wrapper = shallow(<PeepForm />)
})

test('should render LoginPage correctly', () => {
  expect(wrapper).toMatchSnapshot()
})
