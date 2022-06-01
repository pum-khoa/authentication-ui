import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Fieldset from '../../components/Fieldset/Fieldset';
import { useGlobalData } from '../../components/GlobalDataProvider/GlobalDataProvider';
import './SignUp.css';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const password = useRef({});
  password.current = watch('password', '');

  const ContextData = useGlobalData();

  const onSubmit = (data) => {
    ContextData.signUp(JSON.stringify(data));
    reset();
  };

  return (
    <div className="sign-up-ctn">
      <div className="form-title-ctn">
        <h1>
          Sign up<span className="dot-icon">.</span>
        </h1>
        <p>
          Become a member - you'll enjoy exclusice deals, offers, invites and
          rewards
        </p>
      </div>

      <form
        className="form-sign-up"
        id="form-sign-up"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="sign-fullname">
          <Fieldset
            id="firstName"
            type="text"
            labelName="First name"
            placeHold="John"
            require={true}
            errorMess={errors.firstName && errors.firstName.message}
            register={{
              ...register('firstName', {
                required: { value: true, message: 'First name is required' },
                maxLength: {
                  value: 20,
                  message: 'First name is not longer 20 characters',
                },
              }),
            }}
          />
          <Fieldset
            id="lastName"
            type="text"
            labelName="Last name"
            placeHold="Walker"
            require={true}
            errorMess={errors.lastName && errors.lastName.message}
            register={{
              ...register('lastName', {
                required: { value: true, message: 'Last name is required' },
                maxLength: {
                  value: 20,
                  message: 'Last name is not longer 20 characters',
                },
              }),
            }}
          />
        </div>
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
        <Fieldset
          id="cPassword"
          type="password"
          labelName="Confirm Password"
          placeHold="******"
          require={true}
          errorMess={errors.cPassword && errors.cPassword.message}
          register={{
            ...register('cPassword', {
              required: {
                value: true,
                message: 'Confirm Password is required',
              },
              validate: (value) =>
                value === password.current || 'The passwords do not match',
            }),
          }}
        />
        <Fieldset
          id="phone"
          type="number"
          labelName="Phone number"
          placeHold="+84 123 123 123"
          require={false}
          errorMess={errors.phone && errors.phone.message}
          register={{
            ...register('phone', {
              minLength: {
                value: 10,
                message: 'Phone number must have at least 6 characters',
              },
              maxLength: {
                value: 12,
                message: 'Phone number must have less than 12 characters',
              },
            }),
          }}
        />
        <Button
          htmlType="submit"
          type="primary"
          block={true}
          className="button-submit-sign-up"
        >
          Become a member
        </Button>
      </form>

      <div className="form-footer-wrapper">
        <p>Already have an account?</p>
        <Link className="sign-in" to="/sign-in">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
