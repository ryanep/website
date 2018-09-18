import { shallow } from 'enzyme';
import React from 'react';
import Header from '.';

describe('<Header />', () => {
  it('should render without crashing', () => {
    shallow(<Header />);
  });
});
