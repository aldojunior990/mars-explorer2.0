import styled from "styled-components";

export const Description = styled.div`
  width: 100%;
  background-size: cover;
  color: var(--white);
  margin-top: 1rem;
  border-radius: 0.5rem;
  h2 {
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.5rem;
    b {
      color: var(--orange);
    }
  }

  p {
    line-height: 1.5rem;
    color: var(--text-subtitle);
    max-width: 90%;
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: 500;
    text-align: start;
  }

  @media (max-width: 1024px) {
    p {
      max-width: 100%;
    }
  }
  @media (max-width: 425px) {
    h2 {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  border-radius: 0.5rem;
  height: 6rem;
`;

export const Container = styled.div`
  height: 100%;
  header {
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
`;
