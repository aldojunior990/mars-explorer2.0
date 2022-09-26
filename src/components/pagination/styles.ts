import styled from "styled-components";

export const Container = styled.ul`
  list-style: none;
  display: flex;
  padding-top: 3rem;
  padding-bottom: 3rem;

  li {
    color: var(--white);
    & + li {
      margin-left: 0.5rem;
    }

    button {
      background-color: var(--black-200);
      height: 2.5rem;
      width: 100%;
      border: 0px;
      color: var(--white);
      border-radius: 0.2rem;
      font-weight: 600;
    }
  }

  .mid-buttons {
    width: 2.5rem;
    button {
      &:hover {
        border: 1px solid var(--orange);
      }
    }

    .pagination__item--active {
      border: 1px solid var(--orange);
    }
  }

  .side-buttons {
    width: 6rem;
    button {
      background-color: var(--orange);
      &:disabled {
        background-color: var(--black-200);
      }
    }
  }
`;
