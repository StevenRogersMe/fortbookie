import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
// Styles
import './styles.sass';

const Overlay = ({ isActive, className, zIndex, style, ...otherProps }) => {
  const [container] = React.useState(document.createElement('div'));

  React.useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    }
  }, [container]);

  const classes = classNames({
    'overlay': true,
    'is-active': isActive,
    [className]: className
  });

  const overlay = <div className={classes} style={{ zIndex }}  {...otherProps} />;

  return ReactDOM.createPortal(overlay, container);
};

Overlay.defaultProps = {
  zIndex: 100
};

export default Overlay;
