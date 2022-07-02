import styled from 'styled-components';

export const Nav = styled.nav`
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #CCCCCC;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  height: 88.23px;
  justify-content: space-around;
  position: fixed;
  width: 100%;
  z-index: 100;

  .logo-menu {
    display: flex;
    justify-content: center;
    align-items: center;;
    flex-direction: row;
  }

  .menu-mobile {
    display: none;
    margin-right: 30px;
  }

  .buttons-left {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 787.98px) {
    .menu-mobile {
      display: block;
    }
  }
`;
