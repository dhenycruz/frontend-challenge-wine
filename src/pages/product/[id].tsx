import Image from 'next/image';
import styled from 'styled-components';
import { Navbar } from '../../components/Navbar/NavBar';
import { ButtonBack } from '../../components/PageDetailsProduct/ButtonBack';
import { ImageProduct } from '../../components/PageDetailsProduct/ImageProduct';
import { InfoProduct } from '../../components/PageDetailsProduct/InfoProduct';
import ProductImage from '../../../public/images/productdetails.png';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

const DetailsProduct = () => (
  <>
    <Navbar />
    <ButtonBack />
    <Container>
      <ImageProduct>
        <Image src={ProductImage} alt="Imagem do Produto" width={381} height={579} />
      </ImageProduct>
      <InfoProduct />
    </Container>
  </>
);

export default DetailsProduct;
