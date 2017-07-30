import React from 'react';
import Header from './';
import styles from './style.scss';

describe('<Header />', () => {
  it('Render component on home', () => {
    const component = shallow(<Header path={'/'} />);
    expect(component.hasClass(styles.banner)).toEqual(true);
  });

  it('Render component on other page', () => {
    const component = shallow(<Header path={'/test'} />);
    expect(component.hasClass(styles.header)).toEqual(true);
  });

  it('Render heading and intro on home', () => {
    const component = shallow(<Header path={'/'} />);
    expect(component.find('h1').length).toEqual(1);
    expect(component.find('p').length).toEqual(1);
  });
});
