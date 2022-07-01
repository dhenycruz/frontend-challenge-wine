import Image from 'next/image';
import styled from 'styled-components';
import ImgPerfil from '../../../../public/images/perfil.png';

const PerfilDiv = styled.div`
  align-items: end;
  border: 2px solid gray;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
  display: flex;
  height: 56.15px;
  justify-content: center;
  margin-left: 24px;
  width: 56px;
  
  @media (max-width: 787.98px) {
    display: none;
  }
`;

export const Perfil = () => (
  <PerfilDiv>
    <Image src={ImgPerfil} alt="Botão Perfil" width={38.83} height={42.65} />
  </PerfilDiv>
);
