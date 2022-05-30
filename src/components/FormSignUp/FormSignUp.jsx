import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../Input/Input';
import './FormSignUp.css';

const FormSignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = useRef({});
  password.current = watch('password', '');

  const onSubmit = async (data) => console.log(JSON.stringify(data));
  return (
    <form className="form-sign-up" onSubmit={(e) => e.preventDefault()}>
      <div className="sign-fullname">
        <Input
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
        <Input
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
      <Input
        id="email"
        type="text"
        labelName="Email"
        placeHold="example@email.com"
        require={true}
        errorMess={errors.email && errors.email.message}
        register={{
          ...register('email', {
            required: { value: true, message: 'Email is required' },
            pattern: { value: /^\S+@\S+$/i, message: 'Email is invalid' },
          }),
        }}
      />
      <Input
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
      <Input
        id="cPassword"
        type="password"
        labelName="Confirm Password"
        placeHold="******"
        require={true}
        errorMess={errors.cPassword && errors.cPassword.message}
        register={{
          ...register('cPassword', {
            required: { value: true, message: 'Confirm Password is required' },
            validate: (value) =>
              value === password.current || 'The passwords do not match',
          }),
        }}
      />
      <Input
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
      <button
        type="submit"
        className="btn-submit"
        onClick={handleSubmit(onSubmit)}
      >
        Become a member
      </button>
    </form>
  );
};

export default FormSignUp;
