import styled from 'styled-components';
import { Pagination } from '../Pagination/Pagination';
import { ProductCard } from '../ProductCard/ProductCard';

const SectionStyle = styled.section`
  display: flex;
  flex-direction: column;
  width: 832px;
  height: 100%;
  padding-left: 5px;

  h4 {
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 21.6px;
  }

  strong {
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 21.6px;
    margin-right: 5px;
  }
`;

const ListGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  margin-top: 27px;
`;

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8];

export const Section = () => (
  <SectionStyle>
    <h4>
      <strong>49</strong>
      produtos encontrados
    </h4>
    <ListGrid>
      { array.map(() => <ProductCard />)}
    </ListGrid>
    <Pagination />
  </SectionStyle>
);
