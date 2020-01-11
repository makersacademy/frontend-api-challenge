import React from 'react';
import { shallow } from 'enzyme';

export const findByTestAttr = (wrapper, attr) => {
  return wrapper.find(`[data-test="${attr}"]`);
}

export const setup = (Component = null, props = {}, state = null)=> {
  return shallow(<Component {...props} />);
}