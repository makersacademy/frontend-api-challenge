import React from 'react'
import { shallow } from 'enzyme'
import { RegistrationPage } from '../../components/RegistrationPage'

let wrapper

beforeEach(() => {
  wrapper = shallow(<RegistrationPage />)
})

test('should render LoginPage correctly', () => {
  expect(wrapper).toMatchSnapshot()
})
