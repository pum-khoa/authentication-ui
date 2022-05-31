import React from 'react';
import './Button.css';
const Button = (props) => {
  const { htmlType, type, block, size, className, children, ...prop } = props;

  const checkPropToStyle = () => {
    const style = {};
    if (type === 'primary') {
      style['backgroundColor'] = 'var(--primary-color)';
      style['color'] = 'white';
    } else style['backgroundColor'] = 'white';
    if (block) style['width'] = '100%';
    else style['width'] = 'fit-content';

    switch (size) {
      case 'small':
        style['height'] = '40px';
        break;

      case 'large':
        style['height'] = '60px';
        break;

      default:
        style['height'] = '50px';
        break;
    }

    return style;
  };

  return (
    <button
      className={`Button ${className}`}
      type={htmlType}
      {...prop}
      style={checkPropToStyle()}
    >
      {children}
    </button>
  );
};

export default Button;
