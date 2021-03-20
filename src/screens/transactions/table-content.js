import React, { Fragment } from 'react';
// Components
import Typography from 'components/typography';

export const tableContent = () => {
  return [
    {
      title: 'Date',
      render: ({ date }) => <Fragment>{date}</Fragment>
    },
    {
      title: 'Time',
      render: ({ time }) => <Fragment>{time}</Fragment>
    },
    {
      title: 'Transaction',
      render: ({ transaction: { placed, placedPrice, game, price, title } }) => {
        return (
          <Fragment>
            <div className="transactions__line">
              <Typography component="p" className="p-sm text-bold">Placed - {placed}</Typography>
              <Typography component="p" className="p-sm text-bold text-accent-2">${placedPrice}</Typography>
            </div>
            <div className="transactions__line">
              <Typography component="p" className="p-sm text-bold">{game}</Typography>
              <Typography component="p" className="p-sm text-bold">{price}</Typography>
            </div>
            <div className="transactions__line">
              <Typography component="p" className="p-sm text-medium text-dark-3">{title}</Typography>
            </div>
          </Fragment>
        )
      }
    },
    {
      title: 'Amount',
      render: ({ amount }) => <Fragment>{amount}</Fragment>
    },
    {
      title: 'Remaining Balance',
      render: ({ remainingBalance }) => <Fragment>${remainingBalance}</Fragment>
    },
  ]
};
