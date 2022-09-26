import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  display: grid;
  margin-top: 2rem;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 15rem;
  border-radius: 0.5rem;
`;
