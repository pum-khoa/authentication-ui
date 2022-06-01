import React, { useEffect } from 'react';
import './Button.css';
const Button = (props) => {
  const { htmlType, type, block, size, className, children, ...prop } = props;
  return (
    <button
      className={`button ${className} button-${size} button-block-${block} button-${type}`}
      id="button"
      type={htmlType}
      {...prop}
    >
      {children}
    </button>
  );
};

export default Button;
