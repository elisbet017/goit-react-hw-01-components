import styled from 'styled-components';

export const TransactionTable = styled.table``;
export const TableCaption = styled.th`
  padding: 5px 0;
`;
export const TableCaptionsList = styled.tr`
  background-color: #75b9d9;
`;
export const TableString = styled.tr`
  &:nth-of-type(odd) {
    background-color: #e9e9e9;
  }
`;
export const TableStringBlock = styled.td`
  width: 150px;
  text-align: center;
  padding: 5px 0;
`;
