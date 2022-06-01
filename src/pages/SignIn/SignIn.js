import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Checkbox from '../../components/Checkbox/Checkbox';
import Fieldset from '../../components/Fieldset/Fieldset';
import { useGlobalData } from '../../components/GlobalDataProvider/GlobalDataProvider';
import './SignIn.css';

const SignIn = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const ContextData = useGlobalData();

  const onSubmit = (data) => {
    ContextData.signIn(JSON.stringify(data));
    reset();
  };

  return (
    <div className="sign-up-ctn">
      <div className="form-title-ctn">
        <h1>
          Sign In<span className="dot-icon">.</span>
        </h1>
        <p>Welcome back my friend. Now please sign in to use this app.</p>
      </div>

      <form
        className="form-sign-up"
        id="form-sign-up"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Fieldset
          id="email"
          type="text"
          labelName="Email"
          placeHold="example@email.com"
          require={true}
          errorMess={errors.email && errors.email.message}
          register={{
            ...register('email', {
              required: { value: true, message: 'Email is required' },
              pattern: {
                value:
                  // eslint-disable-next-line no-useless-escape
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Email is invalid',
              },
            }),
          }}
        />
        <Fieldset
          id="password"
          type="password"
          labelName="Password"
          placeHold="******"
          require={true}
          errorMess={errors.password && errors.password.message}
          register={{
            ...register('password', {
              required: { value: true, message: 'Password is required' },
              minLength: {
                value: 6,
                message: 'Password must have at least 6 characters',
              },
              maxLength: 50,
            }),
          }}
        />
        <Checkbox
          name="remember"
          value="remember"
          register={{
            ...register('remember'),
          }}
        >
          Remember me
        </Checkbox>
        <Button
          htmlType="submit"
          type="primary"
          block={true}
          className="button-submit-sign-in"
        >
          Submit
        </Button>
      </form>
      <div className="form-footer-wrapper">
        <p>Not have an account yet?</p>
        <Link className="sign-in" to="/sign-up">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
