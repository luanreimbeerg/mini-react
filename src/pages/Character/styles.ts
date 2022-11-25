import styled from "styled-components";

export const Container = styled.div`
  padding: 1.5rem;

  h1 {
    display: flex;
    justify-content: center;
    margin-block-end: 1.125rem;
  }

  .content__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;

    @media (max-width: 1090px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1440px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;
