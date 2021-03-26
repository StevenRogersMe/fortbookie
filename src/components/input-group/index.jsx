import React from 'react';
// Styles
import './styles.sass';

const InputGroup = ({ input, append, prepend }) => {
  return (
    <div className="input-group">
      {prepend && <div className="input-group__prepend">{prepend}</div>}
      {input}
      {append && <div className="input-group__append">{append}</div>}
    </div>
  );
};

export default InputGroup;
