import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  margin-top: 3rem;
  h2 {
    color: var(--white-200);
    font-size: 1rem;
    font-weight: 500;
  }
  main {
    margin-top: 1rem;
  }
`;

export const Searchs = styled.nav`
  margin-top: 1rem;
  background-color: var(--black-200);
  border-radius: 0.5rem;
  display: flex;
  color: white;
  padding: 2rem;
  justify-content: space-between;
  align-items: center;
  h2 {
    color: var(--white);
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: 0px;
    color: var(--white);
    font-size: 1.5rem;
  }
`;
