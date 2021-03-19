import React from 'react';
// UI
import ContentBox from 'components/content-box';
import Typography from 'components/typography';
import DataPreview from 'components/data-preview';
// Styles
import './styles.sass';
// Data preview
import { dataPreviewContent } from './data-preview-content';

const Rewards = () => {
  return (
    <ContentBox className="rewards">
      <ContentBox.Header>
        <Typography component="h3" className="transactions__header-title">Rewards</Typography>
      </ContentBox.Header>
      <ContentBox.Body>
        <DataPreview content={dataPreviewContent()} />
      </ContentBox.Body>
    </ContentBox>
  );
};

export default Rewards;
