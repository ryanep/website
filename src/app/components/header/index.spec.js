import { shallow } from 'enzyme';
import React from 'react';
import Header from './';
import styles from './style.scss';

describe('<Header />', () => {
  it('Render component on home', () => {
    const component = shallow(<Header isBanner={true} />);
    expect(component.hasClass(styles.banner)).toEqual(true);
  });
});
