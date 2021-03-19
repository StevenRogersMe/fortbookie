import React, { Fragment } from 'react';
// Components
import Typography from 'components/typography';

export const tableContent = () => {
  return [
    {
      title: 'ID',
      render: ({ date }) => <Fragment>{date}</Fragment>
    },
    {
      title: 'Player Name',
      render: ({ time }) => <Fragment>{time}</Fragment>
    },
    {
      title: 'PR Points',
      render: ({ amount }) => <Fragment>{amount}</Fragment>
    },
    {
      title: 'Earnings',
      render: ({ }) => <Fragment>$</Fragment>
    },
  ]
};
