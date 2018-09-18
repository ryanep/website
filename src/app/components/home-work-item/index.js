import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import * as styled from './styled';

const HomeWorkItem = ({ url, desc, inProgress, image, imageAlt }) => (
  <styled.Work>
    <LazyLoad width={300} height={200}>
      <styled.Link href={url} target="_blank" rel="noopener noreferrer">
        {inProgress && <styled.InProgress>In progress</styled.InProgress>}
        <styled.Image src={image} alt={imageAlt} />
      </styled.Link>
    </LazyLoad>
    <p>{desc}</p>
  </styled.Work>
);

HomeWorkItem.propTypes = {
  url: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  inProgress: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired
};

HomeWorkItem.defaultProps = {};

export default HomeWorkItem;
