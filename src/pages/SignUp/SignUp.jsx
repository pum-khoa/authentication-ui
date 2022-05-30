import React from 'react';
import FormFooter from '../../components/FormFooter/FormFooter';
import FormSignUp from '../../components/FormSignUp/FormSignUp';
import FormTitle from '../../components/FormTitle/FormTitle';
import './SignUp.css';

const SignUp = () => {
  return (
    <div className="sign-up-ctn">
      <FormTitle />
      <FormSignUp />
      <FormFooter />
    </div>
  );
};

export default SignUp;
