import Image from 'next/image';
import Router from 'next/router';
import { useContext } from 'react';
import { ProductContext } from '../../../context/ProductContext';
import { Product } from '../../../interfaces/interfaces';
import { Card, BoxInfo, Button } from './ProductCardStyle';

type props = { product: Product };

export const ProductCard = ({ product }: props) => {
  const { setCart } = useContext(ProductContext);
  const redirectPage = () => {
    const url = product.name.split(' ').join('-');
    Router.push(`/product/${url}`);
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
    <Card>
      <BoxInfo onClick={redirectPage}>
        <div className="ImageProduct">
          <Image
            loader={() => product.image}
            src={product.image}
            id="ImageProduct"
            alt="Imagem de um produto"
            width={128.57}
            height={178.13}
          />
        </div>
        <h6>{product.name}</h6>
        <div className="price">
          <p className="price-promotion">
            {Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(product.price)}
          </p>
          <span className="promotion">
            {product.discount}
            % OFF
          </span>
        </div>
        <div className="price">
          <p className="socio">
            SÓCIO WINE
          </p>
          <span className="price-socio">
            {Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(product.priceMember)}
          </span>
        </div>
        <div className="price">
          <p className="no-socio">
            Não sócio R$
            {Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(product.priceNonMember)}
          </p>
        </div>
      </BoxInfo>
      <Button onClick={() => addProductCart(product)}>ADICIONAR</Button>
    </Card>
  );
};
