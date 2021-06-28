import styled from 'styled-components';
import { fromTablet } from '~/styles/breakpoints';

export const Banner = styled.section`
  padding: 6rem 0;
  text-align: center;
`;

export const Description = styled.p`
  max-width: 82rem;
  margin: 0 auto;
`;

export const Form = styled.form`
  text-align: left;
`;

export const Button = styled.div`
  text-align: center;
`;

export const Groups = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media ${fromTablet} {
    flex-direction: row;
    gap: 2rem;
  }
`;

export const Group = styled.div`
  @media ${fromTablet} {
    width: 50%;
  }
`;
