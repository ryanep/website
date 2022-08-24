import styled from "styled-components";

export const Section = styled.section`
  padding: 6rem 0;
  transition: background-color 0.3s;
  background-color: ${({ theme }) => theme.colors.bodyBackgroundColor};
  text-align: center;

  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.altBackgroundColor};
  }
`;
