import styled from 'styled-components';

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 1rem;
  transition: background-color 0.3s;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.inputBackgroundColor};
  color: ${({ theme }) => theme.colors.highlightColor};
  font-size: 1.4rem;
`;

export const Label = styled.div`
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;
