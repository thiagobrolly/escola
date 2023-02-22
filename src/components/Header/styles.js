import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  background-color: var(--primary);

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    color: #fff;
    width: 720px;

    a {
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      transition: 0.2s;
      color: #fff;

      &:hover {
        border-bottom: 3px solid greenyellow;
      }

      &.active {
        color: greenyellow;
        border-bottom: 3px solid greenyellow;
      }
    }
  }
`;
