import styled from 'styled-components';

export const ImageProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 640px;
  height: 580px;

  @media (max-width: 575.98px) {
    display: none;
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    display: none;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
  }
  @media (min-width: 991.99px) {
  }
`;
