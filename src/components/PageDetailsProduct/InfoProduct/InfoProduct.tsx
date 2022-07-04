import { useContext, useState } from 'react';
import Image from 'next/image';
import StarYellow from '../../../../public/images/star-yellow.png';
import StarGray from '../../../../public/images/star-gray.png';
import ProductImage from '../../../../public/images/productdetails.png';
import { ButtonAddMobile } from '../ButttonAddMobile';
import {
  InfoDiv,
  Location,
  InfoAndAvaliable,
  ImageProductMobile,
  PriceProduct,
  ComentSommelier,
  ButtonAdd,
  Divider,
} from './InfoProductStyled';
import { Product } from '../../../interfaces/interfaces';
import { ProductContext } from '../../../context/ProductContext';

type props = { product: Product };

export const InfoProduct = ({ product }: props) => {
  const { setCart } = useContext(ProductContext);
  const [qty, setQty] = useState(1);
  const [disabledButtonMore, setDsiabledButton] = useState(false);

  const addQty = () => {
    setQty((prev) => {
      if (prev <= 1) {
        setDsiabledButton(true);
      }
      setDsiabledButton(false);
      return prev + 1;
    });
  };

  const removeQty = () => {
    setQty((prev) => {
      if (prev <= 1) {
        setDsiabledButton(true);
      }
      return prev - 1;
    });
  };

  const addProductCart = (productCard: Product) => {
    if (localStorage.getItem('wineCard')) {
      const cartLocal = localStorage.getItem('wineCard');
      const cart = JSON.parse(cartLocal as string);
      cart.push(productCard);
      localStorage.setItem('wineCard', JSON.stringify(cart));
      setCart(cart);
    } else {
      localStorage.setItem('wineCard', JSON.stringify([productCard]));
      setCart([productCard]);
    }
  };

  return (
    <InfoDiv>
      <Location>
        <span>Vinhos</span>
        <span className="arrow">{'>'}</span>
        <span>{product.country}</span>
        <span className="arrow">{'>'}</span>
        <span className="span-last">{product.region}</span>
      </Location>
      <h3>{product.name}</h3>
      <InfoAndAvaliable>
        { product.image && (
          <Image loader={() => product.flag} src={product.flag} alt="Bandeira país" width={16} height={16} />
        )}
        <span>
          {`${product.country} ${product.type} ${product.classification}`}
          { product.volume && `${product.volume}`}
          { product.size && `${product.size}` }
        </span>
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
        <span className="price">
          { Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(product.priceMember) }
        </span>
        <p>
          {`NÃO SÓCIO R$ ${Intl.NumberFormat(
            'pt-br',
            { style: 'currency', currency: 'BRL' },
          ).format(product.priceNonMember)}/un.`}
        </p>
      </PriceProduct>
      <ComentSommelier>
        <h6>Comentário do Sommelier</h6>
        <p>
          {product.sommelierComment}
        </p>
      </ComentSommelier>
      <ButtonAdd disabled={disabledButtonMore}>
        <div className="product-qty">
          <div className="button-qty">
            <button
              type="button"
              className="disabled"
              disabled={disabledButtonMore}
              onClick={removeQty}
            >
              -
            </button>
            <span className="quantity">{qty}</span>
            <button type="button" onClick={addQty}>+</button>
          </div>
        </div>
        <Divider />
        <button type="button" className="button" onClick={() => addProductCart(product)}>
          Adicionar
        </button>
      </ButtonAdd>
      <ButtonAddMobile />
    </InfoDiv>
  );
};
