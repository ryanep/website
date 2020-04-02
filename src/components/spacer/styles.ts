import styled from 'styled-components';
import { SpacerStyleProps } from './types';

export const Spacer = styled.div<SpacerStyleProps>`
  width: 100%;
  height: ${({ size }) => (size === 'small' ? '1rem' : null)};
  height: ${({ size }) => (size === 'medium' ? '2rem' : null)};
  height: ${({ size }) => (size === 'large' ? '4rem' : null)};
`;
