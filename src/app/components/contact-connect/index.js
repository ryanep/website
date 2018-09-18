import React from 'react';
import Wrap from '@components/wrap';
import * as styled from './styled';

const ContactConnect = () => (
  <styled.Connect>
    <Wrap>
      <styled.Heading>Connect with me</styled.Heading>
      <styled.Desc>You can connect with me on a number of accounts</styled.Desc>
    </Wrap>
  </styled.Connect>
);

ContactConnect.propTypes = {};

ContactConnect.defaultProps = {};

export default ContactConnect;
