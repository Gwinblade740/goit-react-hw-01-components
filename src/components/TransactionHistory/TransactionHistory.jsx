import PropTypes from 'prop-types';
import React from 'react';
import css from 'components/TransactionHistory/TransactionHistory.module.css';
export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.headTable}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.bodyTable}>
        {items.map(({ id, type, amount, currency }, index) => {
          return (
            <tr key={id} className={css.rowTable}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }).isRequired
  ),
};

export default TransactionHistory;
