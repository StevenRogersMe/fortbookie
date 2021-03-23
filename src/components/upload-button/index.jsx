import React from 'react';
// UI
import Button from 'components/button';
// Styles
import './styles.sass';

const UploadButton = ({ onChange, text }) => {
  return (
    <Button variant="primary" size="xs" className="upload-button">
      {text}
      <input type="file" accept="image/*" onChange={onChange} className="upload-button__input" />
    </Button>
  );
};

export default UploadButton;
