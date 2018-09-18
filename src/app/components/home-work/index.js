import React from 'react';
import PropTypes from 'prop-types';
import Wrap from '@components/wrap';
import HomeWorkItem from '@components/home-work-item';
import * as styled from './styled';

const HomeWork = ({ title, desc, work }) => (
  <styled.Work id="work">
    <Wrap>
      <styled.Heading>{title}</styled.Heading>
      <styled.Description>{desc}</styled.Description>
      <styled.Items>
        {work.map(item => (
          <HomeWorkItem key={item.id} {...item} />
        ))}
      </styled.Items>
    </Wrap>
  </styled.Work>
);

HomeWork.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  work: PropTypes.arrayOf(PropTypes.shape(HomeWorkItem.propTypes).isRequired)
    .isRequired
};

HomeWork.defaultProps = {};

export default HomeWork;
