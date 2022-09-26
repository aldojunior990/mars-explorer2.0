import styled from "styled-components";

export const Container = styled.div`
  padding-left: 10rem;
  padding-right: 10rem;
  width: 100%;
  display: flex;
  flex-direction: column;
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
