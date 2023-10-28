import styled from 'styled-components';

export const Container = styled.nav`
  display: none;

  background-color: #172c3f;
  border-radius: 12px;

  @media screen and (max-width: 991px) {
    display: flex;
  }
`;

export const Title = styled.a`
  color: white;
`;

export const ContainerCanvas = styled.div`
  background-color: #172c3f;
`;

export const TitleOffCanvas = styled.h5`
  color: white;
`;

export const Icon = styled.img`
  width: 8%;
  margin-right: 20px;
`;

export const Item = styled.div`
  color: white;
  text-align: left;
  justify-content: center;
  justify-items: center;
  padding: 2%;
  padding-left: 20px;
  margin: 0.1% 0%;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
`;
