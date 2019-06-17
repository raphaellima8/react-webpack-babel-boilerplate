import React from 'react';
import { shallow } from 'enzyme';

import Input from './Input.js';

test('Test Input Component', () => {
  const component = shallow(
    <Input 
      text="Example text"
      label="example_text"
      type="text"
      id="example_text"
      value="value test"
      handleChange={ () => 'ok' }
    />
  );
  
  expect(component.text()).toEqual('Example text');
  expect(component.type()).toEqual('div');
  
  expect(component).toMatchSnapshot();
});