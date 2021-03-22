import React from 'react';
// UI
import Typography from 'components/typography';

export const dataPreviewContent = () => {
  return [
    {
      header: () => (
        <Typography component="h4">Tier 1 <Typography component="span" className="text-dark-3 text-regular">4% Commission</Typography></Typography>
      ),
      body: () => (
        <div className="rewards-screen__info">
        </div>
      ),
    },
    {
      header: () => (
        <Typography component="h4">$456.50 <Typography component="span" className="text-dark-3 text-regular">Wagered</Typography></Typography>
      ),
      body: () => (
        <div className="rewards-screen__info">
        </div>
      ),
    },
  ]
};
