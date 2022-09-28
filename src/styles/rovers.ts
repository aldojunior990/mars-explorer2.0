import styled from "styled-components";

export const Container = styled.main`
  padding-left: 10rem;
  padding-right: 10rem;
  width: 100%;
  background-color: var(--black);
  width: 100%;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 3rem;
    padding-bottom: 3rem;
    a {
      text-decoration: none;
      color: var(--white);
      font-weight: 500;
      font-size: 1rem;
      transition: 0.5s;
      &:hover {
        color: var(--orange);
      }
    }
  }

  h2 {
    margin-top: 2rem;
    color: var(--white);
  }

  .btn_top {
    background-color: var(--black-200);
    border: 0px;
    width: auto;
    padding: 1rem;
    height: 3rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: var(--white);
    font-weight: 600;
    border-radius: 0.3rem;
    transition: 0.5s;
    &:hover {
      border: 1px solid var(--orange);
    }
  }

  @media (max-width: 1024px) {
    padding-left: 4rem;
    padding-right: 4rem;
    height: 100%;
  }
  @media (max-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
    height: 100%;
  }
  @media (max-width: 425px) {
    padding-left: 1rem;
    padding-right: 1em;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  border-radius: 0.5rem;
  height: 6rem;
`;

export const Search = styled.nav`
  display: flex;
  margin-top: 2rem;
  align-items: center;
  form {
    width: 100%;
    input[type="date"]::-webkit-inner-spin-button,
    input[type="date"]::-webkit-calendar-picker-indicator {
      display: none;
      -webkit-appearance: none;
    }
    input {
      height: 3rem;
      border-radius: 0.3rem 0rem 0rem 0.3rem;
      width: 15rem;
      background-color: var(--black-200);
      border: 0px;
      color: var(--white);
      padding-left: 1rem;
      padding-right: 1rem;
      font-weight: 600;
    }

    input[type="date"]::-webkit-calendar-picker-indicator {
      display: none;
    }
    input:last-child {
      background-color: var(--orange);
      border: 0px;
      border-radius: 0rem 0.3rem 0.3rem 0rem;
      width: 10rem;
      font-size: 0.9rem;
      font-weight: 600;
      cursor: pointer;
      transition: 0.5s;
      color: var(--black);
      &:hover {
        background-color: var(--white);
      }
    }
  }

  @media (max-width: 1184px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    form {
      input {
        width: 60%;
      }
      input:last-child {
        width: 40%;
      }
    }
  }
`;

export const RoverDescription = styled.section`
  margin-top: 2rem;
  padding: 1rem;
  background-color: var(--black-200);
  border-radius: 0.5rem;

  div {
    b {
      color: var(--orange);
    }
    p:last-child {
      font-weight: 400;
      color: var(--white);
    }
  }

  section {
    p {
      line-height: 2rem;
      color: var(--orange);
      font-weight: 600;
      b {
        color: var(--white);
        font-weight: 400;
      }
    }
  }
`;
