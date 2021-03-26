import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
// Styles
import './styles.sass';

const Alert = ({ type, children, isActive, onClose, className }) => {
  const [container] = React.useState(document.createElement('div'));

  React.useEffect(() => {
    if (isActive) {
      document.body.appendChild(container);
      const timeout = setTimeout(onClose, 1000);
      return () => {
        clearTimeout(timeout);
      }
    }
  }, [isActive, container, onClose]);

  const classes = classNames({
    'alert': true,
    'alert--success': type === 'success',
    [className]: className,
  });

  return ReactDOM.createPortal((
    <CSSTransition in={isActive} timeout={300} onExited={() => document.body.removeChild(container)} classNames="alert-animation" >
      <div className={classes}>
        {children}
      </div>
    </CSSTransition >
  ), container);
};

export default Alert;
