import Image from 'next/image';
import styled from 'styled-components';
import ImgSearch from '../../../../public/images/search.png';

const SearchDiv = styled.div`
  align-items: center;
  border: 2px solid gray;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
  display: flex;
  height: 56.15px;
  justify-content: center;
  margin-left: 24px;
  width: 56px;
`;

export const Search = () => (
  <SearchDiv>
    <Image src={ImgSearch} alt="Botão de busca" width={31.66} height={31.67} />
  </SearchDiv>
);
