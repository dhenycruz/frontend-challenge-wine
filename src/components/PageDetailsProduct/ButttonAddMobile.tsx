import styled from 'styled-components';

const FooterButton = styled.div`
  display: none;
  position: fixed;
  bottom: 0;
  right: 0;
  align-items: center;
  width: 100%;
  height: 88px;
  background-color: #fff;
  
  .price-mobile {
    align-items: center;;
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  .price-mobile p {
    color: #555;
    font-family: 'Lato', sans-serif;
    line-height: 20px;
    font-size: 12px;
    font-weight: 700;
    text-decoration: line-through;
    text-transform: uppercase;
  }

  .price-mobile .no-socio {
    color: #888888;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 12px;
    line-height: 14px;
    text-decoration: none;
    text-transform: uppercase;
    margin-top: 7px;
  }

  .buttonAdd {
    width: 50%;
  }

  .promotion {
    background-color: #F26649;
    border-radius: 1.94677px;
    color: white;
    font-family: 'Lato', sans-serif;
    font-size: 10px;
    font-weight: 700;
    margin-left: 5.35px;
    margin-top: 8.81px;
    padding: 1px 3px;
    position: fixed;
    bottom: 76px;
    left: 30px;
  }

  @media (max-width: 575.98px) {
    display: flex;
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    display: flex;
  }
`;

const PriceProduct = styled.div`
  display: flex;
  align-items: end;
  .currency {
    font-family: 'Lato', sans-serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 28px;
    margin: 0;
    color: #c81a79;
  }

  .price {
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 27px;    
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
`;

const Button = styled.button`
  position: relative;
  background-color: #7ebc43;
  border: none;
  width: 256px;
  height: 39.36px;
  border-radius: 3.89px;
  padding: 12px 23px;
  bottom: 0;

  color: white;
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  line-height: 16px;

  @media (max-width: 412.98px) {
    width: 160px;
  }

  @media (min-width: 413px) and (max-width: 531.98px) {
    width: 200px;
  }
`;

export const ButtonAddMobile = () => (
  <FooterButton>
    <span className="promotion">60% OFF</span>
    <div className="price-mobile">
      <p>R$ 30.007,40</p>
      <PriceProduct>
        <span className="currency">R$</span>
        <span className="price">63,</span>
        <span className="currency">67</span>
      </PriceProduct>
      <p className="no-socio">preço não-sócio R$ 29.999,90</p>
    </div>
    <div className="buttonAdd">
      <Button>Adicionar</Button>
    </div>
  </FooterButton>

);
