import { HeadingProps } from './types';
import * as styled from './styles';

export const Heading = ({ as, type, text }: HeadingProps) => {
  return (
    <styled.Heading type={type} as={as ?? type}>
      {text}
    </styled.Heading>
  );
};
