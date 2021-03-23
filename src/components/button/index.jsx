import React from 'react';
import classNames from 'classnames';
// Styles
import './styles.sass';

const Button = ({ children, href, className, variant, size, disabled, onClick, fluid, noShadow, type, style, loading }) => {
  const classes = classNames({
    'button': !disabled,
    'button--no-shadow': noShadow,
    'button--fluid': fluid,
    'button--loading': loading,
    [`button--${variant}`]: variant,
    [`button--${size}`]: size,
    [className]: className
  });

  const Tag = href ? 'a' : 'button';

  return (
    <Tag href={href} className={classes} disabled={!href && (disabled || loading)} onClick={onClick} style={style} type={type}>
      {loading ?
        <>Loading...</>
        :
        <>{children}</>
      }
    </Tag>
  );
};


export default Button;
