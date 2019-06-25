import React from 'react';
import 'jest-styled-components';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Title from '../Title';

describe('Title Component tests', () => {
  it('Should render component with received props', () => {
    const componentRef = shallow(<Title text="texto teste" />);
    expect(componentRef).toMatchSnapshot();
    expect(componentRef.find('Title__HeaderTitle').text()).toBe('texto teste');
  });
});

describe('Test styled component', () => {
  it('Match style rules snapshot', () => {
    const componentRef = renderer.create(<Title text="texto teste" />).toJSON();
    expect(componentRef).toMatchSnapshot();
    expect(componentRef).toHaveStyleRule('margin', '0');
    expect(componentRef).toHaveStyleRule('font-size', '1rem');
    expect(componentRef).toHaveStyleRule('font-size', '2rem', {
      media: '(min-width: 600px)'
    });
  });
});
