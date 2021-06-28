import styled from 'styled-components';
import { SpacerStyleProps } from './types';

const getSpacerSize = (size: SpacerStyleProps['size']) => {
  switch (size) {
    case 'small':
      return '1rem';
    case 'medium':
      return '2rem';
    case 'large':
      return '4rem';
    default:
      return null;
  }
};

export const Spacer = styled.div<SpacerStyleProps>`
  width: 100%;
  height: ${({ size }) => getSpacerSize(size)};
`;
