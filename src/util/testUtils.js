import React from 'react';
import { shallow } from 'enzyme';

export const findByTestAttr = (wrapper, attr) => {
    return wrapper.find(`[data-test="${attr}"]`);
}

export const setup = (Component = null, props = {}, state = null)=> {
    const wrapper = shallow(<Component {...props} />);
    if (state) wrapper.setState(state);
    return wrapper;
}
