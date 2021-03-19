import React from 'react';
// UI
import PageLayout from 'components/page-layout';
import Rewards from 'modules/rewards';

const RewardsPage = () => {
  return (
    <PageLayout className="rewards-page">
      <Rewards />
    </PageLayout>
  );
};

export default RewardsPage;
