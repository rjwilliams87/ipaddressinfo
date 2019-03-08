import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from './SearchBox';

describe('<SearchBox />', () => {
  it('renders without crashing', () => {
    shallow(<SearchBox />);
  });
});
