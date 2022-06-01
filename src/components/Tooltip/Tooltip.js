import React from 'react';
import './Tooltip.css'

const Tooltip = (props) => {
  return <div className="tooltip-wrapper" label-content={props.label}>{props.children}</div>;
};

export default Tooltip;
