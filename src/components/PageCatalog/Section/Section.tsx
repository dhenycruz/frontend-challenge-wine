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
  justify-items: center;
  grid-template-columns: auto auto auto;
  margin-top: 27px;

  @media (max-width: 531.98px) {
    grid-template-columns: auto auto;
  }

  @media (min-width: 532px) and (max-width: 575.98px) {
    grid-template-columns: auto auto;
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    grid-template-columns: auto auto;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {

  }
  @media (min-width: 991.99px) {
  }
`;

const array = [1, 2, 3, 4, 5, 6, 7, 8];

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
