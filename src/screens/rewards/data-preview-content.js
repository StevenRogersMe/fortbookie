import React from 'react';
// Components
import Typography from 'components/typography';
import RowGroup from 'components/row-group';
import ProgressBar from 'components/progress-bar';
import Button from 'components/button';
import Timer from 'components/timer';

export const dataPreviewContent = () => {
  return [
    {
      header: () => (
        <RowGroup>
          <Typography component="h4">Weekly Cash Back</Typography>
          <Typography component="span" className="text-dark-3">0.5% of weekly amount wagered</Typography>
        </RowGroup>
      ),
      body: () => (
        <div className="rewards-screen__content">
          <Typography component="h3" className="rewards-screen__content-title">Level 1</Typography>
          <Typography component="p" className="rewards-screen__content-text text-dark-3">Level up to increase lossback and rakeback from the month prior</Typography>
          <ProgressBar className="rewards-screen__content-bar" fill="50" />
          <Typography component="p" className="rewards-screen__content-info text-bold">
            Wager <Typography component="span" className="text-accent-1">$25.00</Typography> for next level
          </Typography>
          <Timer className="rewards-screen__content-button" time="5:20:12:35" />
        </div>
      ),
    },
    {
      header: () => (
        <RowGroup>
          <Typography component="h4">Monthly Cash Back</Typography>
          <Typography component="span" className="text-dark-3">1.00% of monthly losses + 0.5% of monthly amount wagered</Typography>
        </RowGroup>
      ),
      body: () => (
        <div className="rewards-screen__content">
          <Typography component="h3" className="rewards-screen__content-title">Level 2</Typography>
          <Typography component="p" className="rewards-screen__content-text text-dark-3">Level up to increase lossback and rakeback from the month prior</Typography>
          <ProgressBar className="rewards-screen__content-bar" fill="100" />
          <Typography component="p" className="rewards-screen__content-info text-bold">
            Wager <Typography component="span" className="text-accent-1">$25.00</Typography> for next level
          </Typography>
          <Button variant="primary" size="xl" className="rewards-screen__content-button">Request cashback</Button>
        </div>
      ),
    },
  ]
};
