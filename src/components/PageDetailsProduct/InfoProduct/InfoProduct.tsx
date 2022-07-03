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

type props = { product: Product };

export const InfoProduct = ({ product }: props) => (
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
