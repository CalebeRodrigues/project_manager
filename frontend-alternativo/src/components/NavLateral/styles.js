import styled from 'styled-components';

export const Container = styled.div`
  min-height: 87vh;
  border: 1px solid gray;

  background-color: #172c3f;

  border-radius: 15px;

  transition: 0.8s;

  @media screen and (max-width: 991px) {
    display: none;
  }

  :hover {
    background-color: #060c13;
  }
`;

export const Icon = styled.img`
  width: 14%;
  margin-right: 12px;
`;

export const Item = styled.div`
  color: white;
  text-align: left;
  justify-content: center;
  justify-items: center;
  padding: 5%;
  padding-left: 20px;
  margin: 4% 2%;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
`;
