import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  font-weight: 500;
  text-align: left;
  margin-bottom: 1rem;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 0;
  border-radius: 0.4rem;
  background-color: #f0f0f0;
  font-size: 1.4rem;
  resize: vertical;
`;
