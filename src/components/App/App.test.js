import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import SearchBox from '../SearchBox/SearchBox';
import fetchIpData from '../../utils/api';

jest.mock('../../utils/api', data => jest.fn(() => Promise.resolve(data)));

// const flushPromise = () => {
//   return new Promise(resolve => {
//     setTimeout(resolve, 0);
//   });
// };

const fakeData = {
  json: {
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
});
