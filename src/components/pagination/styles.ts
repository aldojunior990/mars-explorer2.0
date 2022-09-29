import styled from "styled-components";

export const Container = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
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
    width: 2rem;
    flex: 1;
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
    min-width: 5rem;
    flex: 1;
    button {
      background-color: var(--orange);
      &:disabled {
        background-color: var(--black-200);
      }
    }
  }

  @media (max-width: 1184px) {
    width: 100%;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;
