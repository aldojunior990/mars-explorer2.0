import styled from "styled-components";

export const Container = styled.footer`
  padding-top: 4rem;
  padding-bottom: 2rem;
  display: flex;
  justify-content: flex-end;
  p {
    font-size: 1rem;
    font-weight: 600;
    color: var(--white);
    a {
      color: var(--orange);
      text-decoration: none;
    }
  }

  @media (max-width: 425px) {
    margin-top: 2rem;
    justify-content: center;
  }
`;
