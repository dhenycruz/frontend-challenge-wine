import styled from 'styled-components';
import Image from 'next/image';
import ProductExample from '../../../../public/images/productexample.png';

const Card = styled.div`
  width: 256px;
  height: 387px;
  margin-bottom: 20px;
`;

const BoxInfo = styled.div`
  box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);
  background-color: white;
  height: 333px;
  margin-bottom: 15px;
  width: 265;

  .ImageProduct {
    height: 186.89px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h6 {
    color: #1D1D1B;

    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: -0.22px;
    margin-top: 7.79px;
    margin-left: 9.73px;
    margin-right: 13.63px;
    text-align: center;
  }

  .price {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
  }

  .price .price-promotion {
    color: #888;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    line-height: 15.57px;
    margin-top: 8.81px;
    text-align: center;
    text-decoration-line: line-through;
  }

  .promotion {
    background-color: #f79552;
    border-radius: 1.94677px;
    color: white;
    font-family: 'Lato', sans-serif;
    font-size: 10px;
    font-weight: 700;
    margin-left: 5.35px;
    margin-top: 8.81px;
    padding: 1px 3px;
  }

  .price .socio {
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 11px;
    margin-bottom: 4px;
  }

  .price .price-socio {
    color: #b6116e;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 23px;
    line-height: 27.25px;
    margin-left: 5px;
    margin-top: 8.81px;
  }

  .price .no-socio {
    color: #888888;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
    margin-top: 7px;
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
`;

export const ProductCard = () => (
  <Card>
    <BoxInfo>
      <div className="ImageProduct">
        <Image src={ProductExample} id="ImageProduct" alt="Imagem de um produto" width={198.57} height={178.13} />
      </div>
      <h6>Bacalhôa Meia Pipa Private Selection Castelão Syrah 2014</h6>
      <div className="price">
        <p className="price-promotion">
          R$ 37,40
        </p>
        <span className="promotion">60% OFF</span>
      </div>
      <div className="price">
        <p className="socio">
          SÓCIO WINE
        </p>
        <span className="price-socio">R$ 30,00</span>
      </div>
      <div className="price">
        <p className="no-socio">Não sócio R$ 37,40</p>
      </div>
    </BoxInfo>
    <Button>ADICIONAR</Button>
  </Card>
);
