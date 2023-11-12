import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  margin: 5px;
  width: 100%;
`;

export const Me = styled.div`
  background-color: #3498db;
  color: #fff;
  position: relative;
  padding: 10px;
  margin: 5px;
  border-radius: 10px;
  width: 80%;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: -10px;
    border-style: solid;
    border-width: 10px 10px 10px 0;
    border-color: transparent #3498db transparent transparent;
  }
`;

export const Other = styled.span`
  background-color: #e74c3c;
  color: #fff;
  position: relative;
  padding: 10px;
  margin: 5px;
  border-radius: 10px;
  width: 80%;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    right: -10px;
    border-style: solid;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent #e74c3c;
  }
`;
