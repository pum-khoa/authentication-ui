import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Input.css';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';

const Input = (props) => {
  const { id, type, labelName, placeHold, require, errorMess, register } =
    props;

  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <div className="input-wrapper">
      <label htmlFor={id} className="input-label">
        {labelName}{' '}
        {require === true && <span style={{ color: 'red' }}>*</span>}
      </label>

      {type === 'password' ? (
        <div className="input-password-wrapper">
          <input
            type={isShowPassword ? 'text' : 'password'}
            placeholder={'******'}
            className={errorMess ? 'input input-error' : 'input'}
            {...register}
          />
          {isShowPassword ? (
            <BsFillEyeSlashFill onClick={() => setIsShowPassword(false)} />
          ) : (
            <BsFillEyeFill onClick={() => setIsShowPassword(true)} />
          )}
        </div>
      ) : (
        <input
          type={type}
          placeholder={placeHold}
          className={errorMess ? 'input input-error' : 'input'}
          {...register}
        />
      )}
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

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  labelName: PropTypes.string,
  placeHold: PropTypes.string,
  errorMess: PropTypes.string,
  require: PropTypes.bool,
  register: PropTypes.any,
};

export default Input;
