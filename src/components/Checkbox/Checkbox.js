import React, { useEffect, useState } from 'react';
import './Checkbox.css';

const Checkbox = (props) => {
  const { name, value, register, children, ...prop } = props;
  const [isChecked, setChecked] = useState(false);

  useEffect(() => {
    if (isChecked) document.getElementById(name).className += 'checked';
    else document.getElementById(name).className = 'checkbox-input';
  }, [name, isChecked]);

  return (
    <div className="checkbox-wrapper" onClick={() => setChecked(!isChecked)}>
      <div className="checkbox-input-wrapper">
        <input
          className="checkbox-input"
          type="checkbox"
          id={name}
          name={name}
          value={value}
          {...register}
          {...prop}
        />
      </div>

      <label htmlFor={name} className="checkbox-label">
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
