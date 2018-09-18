import React from 'react';
import PropTypes from 'prop-types';
import Wrap from '@components/wrap';
import HomeTimelineItem from '@components/home-timeline-item';
import * as styled from './styled';

const HomeTimeline = ({ title, desc, timeline }) => (
  <styled.Timeline>
    <Wrap>
      <styled.Heading>{title}</styled.Heading>
      <styled.Description>{desc}</styled.Description>
      <styled.Items>
        {timeline.map(item => (
          <HomeTimelineItem key={item.id} {...item} />
        ))}
      </styled.Items>
    </Wrap>
  </styled.Timeline>
);

HomeTimeline.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  timeline: PropTypes.arrayOf(
    PropTypes.shape(HomeTimelineItem.propTypes).isRequired
  ).isRequired
};

HomeTimeline.defaultProps = {};

export default HomeTimeline;
