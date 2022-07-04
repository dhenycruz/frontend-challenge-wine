import styled from 'styled-components';

export const InfoDiv = styled.div`
  width: 494.22px;
  height: 580px;

  span {
    color: #c81a78;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    margin-right: 8px;
  }
  .arrow {
    width: 10px;
    height: 5.59px;
    color: #888;
  }

  .span-last {
    color: #888;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    line-height: 24px;
  }

  h3 {
    color: #111;
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
    margin-top: 16px;
  }

  @media (max-width: 575.98px) {
    h3 {
      text-align: center;
    }
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    h3 {
      text-align: center;
    }
  }
`;

export const Location = styled.div`
  @media (max-width: 575.98px) {
    display: flex;
    justify-content: center;
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    display: flex;
    justify-content: center;
  }
`;

export const InfoAndAvaliable = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;

  span {
    color: #555;
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-break: 24px;
    margin-left: 5px;
    word-spacing: 5px;
  }

  .star {
    width: 100px;
    display: flex;
    flex-direction: row;

    @media (max-width: 575.98px) {
      display: none;
    }
    @media (min-width: 576px) and (max-width: 767.98px) {
      display: none;
    }
    @media (min-width: 768px) and (max-width: 991.98px) {
      display: none;
    }
  }
  .star p {
    margin-left: 5px;
    color: #555;
    font-family: 'Lato', sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  }

  @media (max-width: 575.98px) {
    justify-content: center;
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    justify-content: center;
  }
`;

export const ImageProductMobile = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 16px;

  @media (max-width: 575.98px) {
    display: flex;
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    display: flex
  }
`;

export const PriceProduct = styled.div`
  margin-top: 52px;

  .currency {
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 900;
    line-height: 32px;
    letter-spacing: -0.49;
    margin: 0;
    color: #c81a79;
  }

  .price {
    font-family: 'Lato', sans-serif;
    font-size: 32px;
    font-weight: 900;
    line-height: 40px;
    letter-spacing: -0.49;
    color: #c81a79;
    margin: 0;
  }

  p {
    color: #888;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 19.2px;
  }

  @media (max-width: 575.98px) {
    display: none;
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    display: none;
  }
`;

export const ComentSommelier = styled.div`
  margin-top: 48px;

  h6 {
    color: #111;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
  }

  p {
    color: #666;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
  }
`;

export const ButtonAdd = styled.div<{ disabled: Boolean }>`
  background-color: #7ebc43;
  border-radius: 4px;
  display: flex;
  align-items: center;
  height: 58px;
  width: 328px;
  
  margin-top: 48px;

  .product-qty {
    align-items: center;
    color: white;
    display: flex;
    height: 58px;
    justify-content: center;
    width: 49%;
  }

  .product-qty button {
    align-items: center;
    color: white;
    cursor: pointer;
    background: none;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 24px;
    display: flex;
    font-weight: 900;
    font-size: 18px;
    line-height: 27.24;
    justify-content: center;
    height: 28px;
    width: 28px;
  }

  .product-qty span {
    align-items: center;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 24px;
    display: flex;
    font-weight: 900;
    font-size: 18px;
    line-height: 27.24;
    justify-content: center;
    height: 28px;
    width: 28px;
  }

  .product-qty .disabled {
    opacity: ${({ disabled }) => (disabled ? '50%' : '100%')};
  }

  .product-qty .quantity {
    border: none;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 42;
  }

  .product-qty .button-qty {
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .button {
    align-items: center;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    display: flex;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-size: 16px;
    font-weight: 700;
    line-height: 19.2px;
    height: 58px;
    justify-content: center;
    width: 49%;
  }

  @media (max-width: 575.98px) {
    display: none;
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    display: none;
  }
`;

export const Divider = styled.div`
  border: 1px solid #fff;
  height: 33px;
  width: 2px;
  opacity: 10%;
`;
