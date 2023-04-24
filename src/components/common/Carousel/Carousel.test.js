import React from 'react';
import { shallow } from 'enzyme';
import Carousel from './Carousel';

describe('Component Swipeable', () => {
  it('should render without crashing', () => {
    const component = shallow(<Carousel />);
    expect(component).toBeTruthy();
  });
});
