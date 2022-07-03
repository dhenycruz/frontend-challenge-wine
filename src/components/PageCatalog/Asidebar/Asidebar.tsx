import styled from 'styled-components';

const AsideBar = styled.aside`
  width: 256px;
  padding-left: 5px;

  h4 {
    font-weight: bolder;
    font-size: 20px;
    line-height: 24px;
  }

  p {
    color: #333333;
    font-family: 'Lato', sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 21.6px;
    margin: 25px 0 15px;
  }

  ul {
    list-style: none;
  }

  li {
    color: #1D1D1B;
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 16.8px;
    margin-left: 5px;
    margin-bottom: 25px;
  }

  li input {
    margin-right: 5px;
  }
`;

export const Asidebar = () => (
  <AsideBar>
    <h4>Refine sua busca</h4>

    <p>Por preço</p>
    <ul>
      <li>
        <input type="radio" name="price" />
        Até R$40
      </li>
      <li>
        <input type="radio" name="price" />
        R$40 A R$60
      </li>
      <li>
        <input type="radio" name="price" />
        R$100 A R$200
      </li>
      <li>
        <input type="radio" name="price" />
        R$200 A R$500
      </li>
      <li>
        <input type="radio" name="price" />
        Acima de R$500
      </li>
    </ul>
  </AsideBar>
);
