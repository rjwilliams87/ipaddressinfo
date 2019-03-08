import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import fetchIpData from '../../utils/api';

jest.mock('../../utils/api', () => jest.fn(() => Promise.resolve()));

// const flushPromise = () => {
//   return new Promise(resolve => {
//     setTimeout(resolve, 0);
//   });
// };

const fakeData = {
  data: {
    WhoisData: {
      registryData: {
        name: 'foo',
        created: '2019-01-15'
      }
    }
  }
};

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('should call fetchIpdata when handleUserSubmit is ran', () => {
    const wrapper = mount(<App />);
    wrapper.instance().handleUserSubmit(fakeData);
    expect(fetchIpData).toHaveBeenCalledTimes(1);
    expect(fetchIpData).toHaveBeenCalledWith(fakeData);
  });

  it('should clear state when clearResults is called', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ data: fakeData });
    expect(wrapper.state().data).toEqual(fakeData);
    wrapper.instance().clearResults();
    expect(wrapper.state().data).toEqual(undefined);
  });
});
