import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../../context/ProductContext';
import { PaginationDiv, ButtonPage } from './PaginationStyled';

export const Pagination = () => {
  const { pages, fetchProducts } = useContext(ProductContext);
  const [arrayPages, setArrayPages] = useState([] as number[]);
  const [pageActive, setPageActive] = useState(1);

  const clickPage = async (pageNumber: number) => {
    setPageActive(pageNumber);
    await fetchProducts(pageNumber);
  };

  useEffect(() => {
    const pagesArray: number[] = [];
    for (let pagesN = 1; pagesN <= pages; pagesN += 1) {
      pagesArray.push(pagesN);
    }
    setArrayPages(pagesArray);
  }, [pages]);

  return (
    <PaginationDiv>
      <div className="button-pagination">
        {
          arrayPages.map((page) => (
            <ButtonPage
              active={pageActive === page}
              onClick={() => clickPage(page)}
            >
              {page}
            </ButtonPage>
          ))
        }
        {/* <ButtonPage active>1</ButtonPage>
        <ButtonPage active={false}>2</ButtonPage>
        <ButtonPage active={false}>3</ButtonPage>
        <span>...</span>
        <ButtonNext>{'Próximo >>'}</ButtonNext> */}
      </div>
    </PaginationDiv>
  );
};
