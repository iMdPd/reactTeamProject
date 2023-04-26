import React from 'react';
import { shallow } from 'enzyme';
import { SaleBoxes } from './SaleBoxes';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

describe('Component SaleBoxes', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <SaleBoxes />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
