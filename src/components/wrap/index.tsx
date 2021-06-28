import { WrapProps } from './types';
import * as styled from './styles';

export const Wrap = ({ children, className }: WrapProps) => {
  return <styled.Wrap className={className}>{children}</styled.Wrap>;
};
