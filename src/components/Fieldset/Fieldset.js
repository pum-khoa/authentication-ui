import React from 'react';
import PropTypes from 'prop-types';
import './Fieldset.css';
import Input from '../Input/Input';

const Fieldset = (props) => {
  const { id, type, labelName, placeHold, require, errorMess, register } =
    props;

  return (
    <div className="fieldset-wrapper">
      <label htmlFor={id} className="fieldset-label">
        {labelName}{' '}
        {require === true && <span style={{ color: 'red' }}>*</span>}
      </label>
      <Input type={type} placeHold={placeHold} register={register} />
      <span
        className="error"
        style={
          errorMess
            ? { transform: 'translateY(-5px)' }
            : { transform: 'translateY(-30px)' }
        }
      >
        {errorMess}
      </span>
    </div>
  );
};

Fieldset.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  labelName: PropTypes.string,
  placeHold: PropTypes.string,
  errorMess: PropTypes.string,
  require: PropTypes.bool,
  register: PropTypes.any,
};

export default Fieldset;
