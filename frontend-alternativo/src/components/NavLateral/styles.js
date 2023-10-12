import styled from 'styled-components';

export const Container = styled.div`
  min-height: 87vh;
  border: 1px solid gray;

  border-radius: 15px;

  transition: 0.8s;

  @media screen and (max-width: 991px) {
    display: none;
  }

  :hover {
    background-color: #f1f1f1;
  }
`;

export const Icon = styled.img`
  width: 14%;
  margin-right: 12px;
`;

export const Item = styled.div`
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
