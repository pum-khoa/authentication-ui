import React from 'react';
import './FormFooter.css';

const FormFooter = () => {
  return (
    <div className="form-footer-wrapper">
      <p>Already have an account?</p>
      <p className="sign-in" href="#">
        Sign in
      </p>
    </div>
  );
};

export default FormFooter;
