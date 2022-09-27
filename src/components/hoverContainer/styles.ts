import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
`;

export const Stats = styled.div`
  color: var(--white);
  margin-left: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
`;

export const Hover = styled.div`
  border: 1px solid var(--orange);
  border-radius: 0.5rem;
  height: auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2 {
    font-size: 1.5rem;
    color: var(--white);
    font-weight: 700;
  }
  p {
    margin-top: 1rem;
    font-size: 1rem;
    color: var(--white-200);
    font-weight: 400;
    line-height: 1.5rem;
  }
  ul {
    list-style: none;
    margin-top: 1rem;
    li {
      & + li {
        margin-top: 0.5rem;
      }
      font-weight: 500;
      align-items: center;
      color: var(--orange);
      display: flex;
      font-size: 1rem;
      b {
        margin-left: 0.5rem;
      }
    }
  }

  button {
    margin-top: 2rem;
    background-color: var(--green);
    border: 0px;
    width: 100%;
    border-radius: 0.3rem;
    height: 2rem;
    color: var(--black);
    font-weight: 700;
    transition: 0.5s;
    &:hover {
      background-color: var(--white);
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;
