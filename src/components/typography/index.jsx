import React from 'react';
import classNames from 'classnames';
// Styles
import './styles.sass';

const Typography = ({ children, component, variant, className, ...otherProps }) => {
  const classes = classNames({
    [variant]: variant,
    [className]: className
  });

  const Tag = component;
  return (
    <Tag className={classes || null} {...otherProps}>{children}</Tag>
  );

};

Typography.defaultProps = {
  component: 'p'
};

export default Typography;
