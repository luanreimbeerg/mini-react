import styled from "styled-components";

export const Container = styled.header`
  border: 1px solid var(--gray-800);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 100px;
  }

  nav {
    display: flex;
    gap: 0.75rem;

    .nav-pag {
      display: flex;
      align-items: center;
    }

    a {
      display: inline-block;
      position: relative;
      padding: 0 0.5rem;
      height: 5rem;
      line-height: 5rem;
      color: var(--gray-300);

      transition: color 0.2s;

      & + a {
        margin-inline-start: 2rem;
      }

      &:hover {
        color: var(--write);
      }

      &.active {
        color: var(--write);
        font-weight: bold;
      }

      &.active::after {
        content: "";
        height: 3px;
        border-radius: 3px 3px 0 0;
        width: 100%;
        position: absolute;
        bottom: 1px;
        left: 0;
        background: red;
      }
    }
  }
`;
