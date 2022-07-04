import { useEffect, useContext } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Bitmap from '../../../../public/images/Bitmap.png';
import { ProductContext } from '../../../context/ProductContext';

const Wine = styled.div`
  align-items: center;
  background-color: #F9B950;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 56px;
  justify-content: center;
  margin-left: 24px;
  width: 56px;

  img {
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 45px;
  }
`;

const TotalCart = styled.div`
  align-items: center;
  align-self: end;
  border: 1px solid gray;
  color: #4fbfa5;
  display: flex;
  font-weight: 900;
  height: 20px;
  justify-content: center;
  justify-self: right;
  margin-left: 30px;
  position: absolute;
  width: 20px;
  background-color: white;
  border-radius: 50%;
`;

export const WineBox = () => {
  const { cart, setCart } = useContext(ProductContext);

  useEffect(() => {
    if (localStorage.getItem('wineCard')) {
      const cartLocal = localStorage.getItem('wineCard');
      const cartL = JSON.parse(cartLocal as string);
      localStorage.setItem('wineCard', JSON.stringify(cartL));
      setCart(cartL);
    }
  }, []);
  return (
    <Wine>
      <Image src={Bitmap} alt="carrinho de compras" width={40} height={56} />
      <TotalCart>{ cart.length }</TotalCart>
    </Wine>
  );
};
