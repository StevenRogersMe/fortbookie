import React from 'react';
import classNames from 'classnames';
// Styles
import './styles.sass';

const Button = ({ children, href, className, variant, size, disabled, onClick, fluid, type, style }) => {
  const classes = classNames({
    'button': !disabled,
    'button--disabled': disabled,
    [`button--${variant}`]: variant,
    [`button--${size}`]: size,
    [`button--${fluid}`]: fluid,
    [className]: className
  });

  const Tag = href ? 'a' : 'button';

  return (
    <Tag href={href} className={classes} disabled={!href && disabled} onClick={onClick} style={style} type={type}>
      {children}
    </Tag>
  );
};


export default Button;
