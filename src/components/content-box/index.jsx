import React, { Component } from 'react';
import classNames from 'classnames';
// UI
import Header from './header'
import Body from './body'
// Styles
import './styles.sass';

class ContentBox extends Component {
  static Header = Header;
  static Body = Body;

  render() {
    const { children, className } = this.props;
    const classes = classNames({
      'content-box': true,
      [className]: className
    });
    return (
      <div className={classes}>
        {React.Children.map(children, child => (
          React.cloneElement(child)
        ))}
      </div>
    );
  }
}

export default ContentBox;
