import React from 'react';
import { shallow } from 'enzyme';
import Results from './Results';

describe('<Results />', () => {
  it('renders without crashing', () => {
    shallow(<Results />);
  });
});
