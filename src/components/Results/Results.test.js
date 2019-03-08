import React from 'react';
import { shallow } from 'enzyme';
import Results from './Results';

// TODO: test that <Results /> is displaying
// the correct UI based on props passed in

describe('<Results />', () => {
  it('renders without crashing', () => {
    shallow(<Results />);
  });
});
