import styled from 'styled-components';

export const KanbanContainer = styled.div`
  height: 80vh;
  border: 1px solid #e4e4e4;
  padding: 2%;
  margin: 0.8%;
  border-radius: 20px;
  overflow-x: auto;
  display: grid;
  grid-template-columns: 50% 50% 50%;
`;

export const KanBanItem = styled.div`
  margin-right: 4%;
  padding: 2%;
  overflow-y: auto;
`;

export const CardGreen = styled.div`
  width: 100%;
  border: 1px solid #030303;
  background-color: green;
  height: 15%;
  border-radius: 20px;
  margin-bottom: 10px;
`;

export const CardYellow = styled.div`
  width: 100%;
  border: 1px solid #030303;
  background-color: #e6ca2b;
  height: 15%;
  border-radius: 20px;
  margin-bottom: 10px;
`;

export const CardRed = styled.div`
  width: 100%;
  border: 1px solid #030303;
  background-color: #d90000;
  height: 15%;
  border-radius: 20px;
  margin-bottom: 10px;
`;
