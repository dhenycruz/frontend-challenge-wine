import styled from 'styled-components';

const DivButtonBack = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10%;
  width: 100%;
  height: 50px;

  span {
    font-size: 23px;
    font-weight: 700;
    margin-right: 22px;
  }

  p {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #111;
  }
`;

export const ButtonBack = () => (
  <DivButtonBack>
    <span>{'<'}</span>
    <p>Voltar</p>
  </DivButtonBack>
);
