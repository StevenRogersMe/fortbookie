import React from 'react';
import ReactSlider from 'react-slider'
// Styles
import './styles.sass';

const Slider = ({ min, max, value, step, onChange }) => {
  return (
    <ReactSlider
      min={min}
      max={max}
      value={value}
      step={step}
      onChange={onChange}
      className="slider"
      thumbClassName="slider__thumb"
      trackClassName="slider__track"
      renderThumb={props => <span {...props}></span>}
    />
  );
};

export default Slider;
