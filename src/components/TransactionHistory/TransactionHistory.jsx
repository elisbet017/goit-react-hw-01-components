import PropTypes from 'prop-types';
import {
  TransactionTable,
  TableCaptionsList,
  TableCaption,
  TableString,
  TableStringBlock,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <thead>
        <TableCaptionsList>
          <TableCaption>Type</TableCaption>
          <TableCaption>Amount</TableCaption>
          <TableCaption>Currency</TableCaption>
        </TableCaptionsList>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TableString key={id}>
            <TableStringBlock>{type}</TableStringBlock>
            <TableStringBlock>{amount}</TableStringBlock>
            <TableStringBlock>{currency}</TableStringBlock>
          </TableString>
        ))}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
