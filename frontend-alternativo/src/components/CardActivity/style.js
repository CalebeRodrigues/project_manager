import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #d6d6d6;
  width: 90%;
  padding: 10px 20px 10px 20px;
  margin-left: auto;
  margin-right: auto;
  transition: 0.2ms;
  border-radius: 10px;
  box-shadow: 2px 2px #e1e1e1;
  :hover {
    cursor: pointer;
  }
`;

export const Atribuido = styled.div`
  text-align: center;
`;

export const Image = styled.img`
  width: 4.5%;
  margin-right: 2%;
  padding-bottom: 2px;
`;

// style={{ width: '24rem', marginLeft: 'auto', marginRight: 'auto' }}
