import styled from 'styled-components';

const MenuDiv = styled.div`
  margin-left: 30px;

  ul {
    list-style: none;
  }

  li {
    color: #555555;
    cursor: pointer;
    display: inline-block;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    margin-left: 24px;
  }

  a {
    text-decoration: none;
  }
  
  a:visited {
    color: #555555;
  }

  a:hover {
    color: #D14B8F;
    padding-bottom: 28px;
    border-bottom: 2px solid #D14B8F;
  }

`;

export const Menu = () => (
  <MenuDiv>
    <ul>
      <li><a href="/">Club</a></li>
      <li><a href="/">Loja</a></li>
      <li><a href="/">Produtores</a></li>
      <li><a href="/">Ofertas</a></li>
      <li><a href="/">Eventos</a></li>
    </ul>
  </MenuDiv>
);
