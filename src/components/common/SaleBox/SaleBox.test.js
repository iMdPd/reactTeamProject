import React from 'react';
import { shallow } from 'enzyme';
import { SaleBox } from './SaleBox';

describe('Component SaleBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<SaleBox />);
    expect(component).toBeTruthy();
  });
});
