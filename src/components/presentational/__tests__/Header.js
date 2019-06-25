import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import Header from '../Header';

describe('Header Component tests', () => {
  it('Should render shallow component without its children', () => {
    const componentRef = shallow(<Header />);
    expect(componentRef).toMatchSnapshot();
  });

  it('Should mount full component with its children', () => {
    const mockStore = configureStore();
    const componentRef = mount(
      <Provider store={mockStore({})}>
        <Header />
      </Provider>
    );
    expect(componentRef).toMatchSnapshot();
  });
});
