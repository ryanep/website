import React from 'react';
import * as styled from './styled';

const Error = () => (
  <styled.Error>
    <styled.Heading>Error 404</styled.Heading>
    <styled.Desc>The page you are looking for does not exist.</styled.Desc>
  </styled.Error>
);

Error.propTypes = {};

Error.defaultProps = {};

export default Error;
