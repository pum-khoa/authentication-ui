import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Input.css';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Input = (props) => {
  const { type, placeHold, errorMess, register } = props;

  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <>
      {type === 'password' ? (
        <div className="input-password-wrapper">
          <input
            type={isShowPassword ? 'text' : 'password'}
            className={errorMess ? 'input input-error' : 'input'}
            placeholder={'••••••'}
            {...register}
          />
          {isShowPassword ? (
            <AiOutlineEyeInvisible onClick={() => setIsShowPassword(false)} />
          ) : (
            <AiOutlineEye onClick={() => setIsShowPassword(true)} />
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
    </>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeHold: PropTypes.string,
  errorMess: PropTypes.string,
  register: PropTypes.any,
};

export default Input;
