import styled from 'styled-components';
import SVGInline from 'react-svg-inline';

export const FooterLink = styled.a`
  position: relative;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 0.2rem solid #ffffff;
  color: $white;
  margin-right: 1rem;
  overflow: hidden;

  &:hover {
    background-color: #ffffff;
    color: ${props => props.theme.colours.primary};

    svg {
      fill: ${props => props.theme.colours.primary};
    }
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const Icon = styled(SVGInline)`
  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 1.5rem;
    height: 1.5rem;
    fill: #ffffff;
  }
`;

export const Hide = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
`;
