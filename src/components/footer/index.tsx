import React from 'react';
import { Wrap } from '~/components/wrap';
import { FooterProps } from './types';
import * as styled from './styles';

export const Footer: React.FC<FooterProps> = () => {
  return (
    <styled.Footer>
      <Wrap>
        &copy; Ryan Elliott-Potter 2020. All rights reserved.
      </Wrap>
    </styled.Footer>
  );
};
