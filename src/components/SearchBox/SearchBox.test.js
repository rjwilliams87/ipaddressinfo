import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from './SearchBox';

const spy = jest.fn();
const errorMsg = 'please enter valid IP or domain name';

describe('<SearchBox />', () => {
  it('renders without crashing', () => {
    shallow(<SearchBox />);
  });

  it('cancels event when form submits', () => {
    const wrapper = shallow(<SearchBox />);
    let prevented = false;
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {
        prevented = true;
      }
    });
    expect(prevented).toBe(true);
  });

  it('sets state when user input changes', () => {
    const userInput = 'foo';
    const wrapper = shallow(<SearchBox />);
    wrapper.find('input').simulate('change', {
      target: { value: userInput }
    });
    expect(wrapper.state().userInput).toEqual(userInput);
  });

  it('calls props.handleUserSubmit on submit', () => {
    const userInput = 'bar';
    const wrapper = shallow(<SearchBox handleUserSubmit={spy} />);
    wrapper.find('input').simulate('change', {
      target: { value: userInput }
    });
    wrapper.find('form').simulate('submit', {
      preventDefault: jest.fn()
    });
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('sets error if user leaves text area blank', () => {
    const wrapper = shallow(<SearchBox handleUserSubmit={spy} />);
    wrapper.find('form').simulate('submit', {
      preventDefault: jest.fn()
    });
    expect(wrapper.state().error).toEqual(errorMsg);
  });
});
