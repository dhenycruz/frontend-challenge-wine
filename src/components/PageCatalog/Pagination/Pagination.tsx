import styled from 'styled-components';

const PaginationDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .button-pagination {
    height: 100px;
  }

  span {
    color: #b6116e;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 30px;
    line-height: 9px;
    margin-left: 2px;
    margin-right: 10px;
  }
`;

const ButtonPage = styled.button<{ active: Boolean }>`
  background-color: ${({ active }) => (active ? '#b6116e' : 'shite')};
  border: 1px solid #b6116e;
  border-radius: 3px;
  margin-right: 8px;;
  padding: 17px 19px;

  color: ${({ active }) => (active ? 'white' : '#b6116e')};
  font-family: 'Lato', sans-serif;
  font-size: 19px;
  font-style: normal;
  font-weight: 700;
  line-height: 19px;
`;

const ButtonNext = styled.button`
  background: none;
  border: none;
  border-radius: 3px;

  color: #b6116e;
  font-family: 'Lato', sans-serif;
  font-size: 19px;
  font-style: normal;
  font-weight: 700;
  line-height: 19px;
`;

export const Pagination = () => (
  <PaginationDiv>
    <div className="button-pagination">
      <ButtonPage active>1</ButtonPage>
      <ButtonPage active={false}>2</ButtonPage>
      <ButtonPage active={false}>3</ButtonPage>
      <span>...</span>
      <ButtonNext>{'Próximo >>'}</ButtonNext>
    </div>
  </PaginationDiv>
);
