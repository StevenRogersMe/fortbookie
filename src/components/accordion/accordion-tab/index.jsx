import React from 'react';
import classNames from 'classnames';
// UI
import Typography from 'components/typography';
// Styles
import './styles.sass';

const AccordionTab = ({ title, date, time, handleAccordion, isExpanded }) => {

  const classes = classNames({
    'accordion-tab': true,
  });

  return (
    <div className={classes} onClick={handleAccordion}>
      <div className="accordion-tab__title">
        <Typography component="h3">{title}</Typography>
      </div>
      <div className="accordion-tab__meta">
        <div className="accordion-tab__meta-item">
          {date}
        </div>
        <div className="accordion-tab__meta-item">
          {time}
        </div>
      </div>
      <div className="accordion-tab__icon">
        <div className="accordion-tab__icon-circle">
          <div className={`accordion-tab__icon-line ${isExpanded ? 'is-expanded' : ''}`}></div>
        </div>
      </div>
    </div>
  );
};

export default AccordionTab;
