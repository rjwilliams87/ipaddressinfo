import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('<Header />', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('calls refresh on btn click', () => {
    const spy = jest.fn();
    const wrapper = shallow(<Header refresh={spy} />);
    wrapper.find('button').simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});
