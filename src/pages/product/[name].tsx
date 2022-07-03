import { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Navbar } from '../../components/Navbar/NavBar';
import { ButtonBack } from '../../components/PageDetailsProduct/ButtonBack';
import { ImageProduct } from '../../components/PageDetailsProduct/ImageProduct';
import { InfoProduct } from '../../components/PageDetailsProduct/InfoProduct/InfoProduct';
import { getProductsByName } from '../../services/APIREQUEST';
import { Product, ReturnProducts } from '../../interfaces/interfaces';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

const DetailsProduct = () => {
  const [product, setProduct] = useState({} as Product);
  const router = useRouter();
  const fetchProduct = async () => {
    const nameParam = router.query.name as string;
    const nameSearch = nameParam.split('-').join(' ');
    const { items }: ReturnProducts = await getProductsByName(1, nameSearch);
    setProduct(items[0]);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <Navbar />
      <ButtonBack />
      <Container>
        <ImageProduct>
          { product.image && (
            <Image
              loader={() => product.image}
              src={product.image}
              alt="Imagem do Produto"
              width={381}
              height={579}
            />
          )}
        </ImageProduct>
        <InfoProduct product={product} />
      </Container>
    </>
  );
};

export default DetailsProduct;
