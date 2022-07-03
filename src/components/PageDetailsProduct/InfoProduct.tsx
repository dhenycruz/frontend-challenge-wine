import styled from 'styled-components';
import Image from 'next/image';
import Eua from '../../../public/images/spain.png';
import StarYellow from '../../../public/images/star-yellow.png';
import StarGray from '../../../public/images/star-gray.png';
import ProductImage from '../../../public/images/productdetails.png';
import { ButtonAddMobile } from './ButttonAddMobile';

const InfoDiv = styled.div`
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

const Location = styled.div`
  @media (max-width: 575.98px) {
    display: flex;
    justify-content: center;
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    display: flex;
    justify-content: center;
  }
`;

const InfoAndAvaliable = styled.div`
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

const ImageProductMobile = styled.div`
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

const PriceProduct = styled.div`
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

const ComentSommelier = styled.div`
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

const ButtonAdd = styled.div`
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
    opacity: 50%;
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
    color: white;
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

const Divider = styled.div`
  border: 1px solid #fff;
  height: 33px;
  width: 2px;
  opacity: 10%;
`;

export const InfoProduct = () => (
  <InfoDiv>
    <Location>
      <span>Vinhos</span>
      <span className="arrow">{'>'}</span>
      <span>Estados Unidos</span>
      <span className="arrow">{'>'}</span>
      <span className="span-last">Califórnia</span>
    </Location>
    <h3>Aphothic Red 2019</h3>
    <InfoAndAvaliable>
      <Image src={Eua} alt="Bandeira país" width={16} height={16} />
      <span>Estados Unidos Tinto Meio Seco/Demi-Sec 750ml</span>
      <div className="star">
        <Image src={StarYellow} alt="estrela avaliação" width={14.4} height={13.2} />
        <Image src={StarYellow} alt="estrela avaliação" width={14.4} height={13.2} />
        <Image src={StarYellow} alt="estrela avaliação" width={14.4} height={13.2} />
        <Image src={StarYellow} alt="estrela avaliação" width={14.4} height={13.2} />
        <Image src={StarGray} alt="estrela avaliação" width={14.4} height={13.2} />
        <p>(2)</p>
      </div>
    </InfoAndAvaliable>
    <ImageProductMobile>
      <Image src={ProductImage} alt="Imagem do Produto" width={218} height={333} />
    </ImageProductMobile>
    <PriceProduct>
      <span className="currency">R$</span>
      <span className="price">63,</span>
      <span className="currency">67</span>
      <p>NÃO SÓCIO R$ 120,95/un.</p>
    </PriceProduct>
    <ComentSommelier>
      <h6>Comentário do Sommelier</h6>
      <p>
        Produzido no terroir californiano, esse tinto mescla as variedades
        Zinfandel, Syrah, Cabernet Sauvignon e Merlot. Apothic é um vinho
        inspirado nas antigas Apothecas (adegas subterrâneas), um lugar
        misterioso onde há mais de 800 anos os viticultores misturavam e
        armazenavam seus cobiçados vinhos.
      </p>
    </ComentSommelier>
    <ButtonAdd>
      <div className="product-qty">
        <div className="button-qty">
          <span className="disabled">-</span>
          <span className="quantity">1</span>
          <span>+</span>
        </div>
      </div>
      <Divider />
      <div className="button">
        Adicionar
      </div>
    </ButtonAdd>
    <ButtonAddMobile />
  </InfoDiv>
);
