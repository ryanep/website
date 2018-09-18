import React from 'react';
import PropTypes from 'prop-types';
import * as styled from './styled';

const HomeTimelineItem = ({ icon, company, time, role }) => (
  <styled.Link>
    <article>
      <styled.Header>
        <styled.Icon src={icon} width="30" height="30" alt={company} />
        <styled.Company>{company}</styled.Company>
        <styled.Time>{time}</styled.Time>
      </styled.Header>
      <div>{role}</div>
    </article>
  </styled.Link>
);

HomeTimelineItem.propTypes = {
  icon: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired
};

HomeTimelineItem.defaultProps = {};

export default HomeTimelineItem;
