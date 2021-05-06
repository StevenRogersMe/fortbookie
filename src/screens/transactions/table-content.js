/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
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
            <div className="transactions-screen__line">
              <Typography component="span" variant="p-sm" className="text-bold">Placed - {placed}</Typography>
              <Typography component="span" variant="p-sm" className="text-bold text-tertiary">${placedPrice}</Typography>
            </div>
            <div className="transactions-screen__line">
              <Typography component="span" variant="p-sm" className="text-bold">{game}</Typography>
              <Typography component="span" variant="p-sm" className="text-bold">{price}</Typography>
            </div>
            <div className="transactions-screen__line">
              <Typography component="span" variant="p-sm" className="text-medium text-quaternary-dark">{title}</Typography>
            </div>
          </Fragment>
        );
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
  ];
};
