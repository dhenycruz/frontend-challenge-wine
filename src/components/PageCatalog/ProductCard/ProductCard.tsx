import Image from 'next/image';
import Router from 'next/router';
import { Product } from '../../../interfaces/interfaces';
import { Card, BoxInfo, Button } from './ProductCardStyle';

type props = { product: Product };

export const ProductCard = ({ product }: props) => {
  const redirectPage = () => {
    const url = product.name.split(' ').join('-');
    Router.push(`/product/${url}`);
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
      <Button>ADICIONAR</Button>
    </Card>
  );
};
