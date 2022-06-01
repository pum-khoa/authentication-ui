import React, { useEffect, useState } from 'react';
import './Checkbox.css';

const Checkbox = (props) => {
  const { name, value, register, children, ...prop } = props;
  const [isChecked, setChecked] = useState(false);

  useEffect(() => {
    if (isChecked)
      document.getElementById(name).className = 'checkbox-input checked';
    else {
      document.getElementById(name).className = 'checkbox-input un-checked';
    }
  }, [isChecked, name]);

  return (
    <div className="checkbox-wrapper">
      <input
        onClick={() => setChecked(!isChecked)}
        className="checkbox-input"
        type="checkbox"
        id={name}
        name={name}
        value={isChecked}
        {...register}
        {...prop}
      />

      <label htmlFor={name} className="checkbox-label">
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
