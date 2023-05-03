import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Button from '../../atoms/Button';
import { SignInProps, SignFormData } from '../../../type/UserType';
import './SignInForm.scss';

const SignInForm: React.FC<SignInProps> = ({ SignInHandler }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignFormData>();
  const onSubmit = (data: SignFormData, e: any) => {
    SignInHandler(data, e);
  };
  return (
    <form
      name="sign-in-form"
      className="sign-in-form"
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      aria-label="sign in form"
    >
      <div className="form-input">
        <label htmlFor="userId" aria-label="user id">
          User ID
        </label>
        <input
          type="text"
          id="userId"
          autoComplete="off"
          {...register('user', { required: 'user id is required' })}
        />
        {errors.user && <p style={{ color: 'red' }}>{errors.user.message}</p>}
      </div>
      <div className="form-input">
        <label htmlFor="password" aria-label="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          autoComplete="off"
          {...register('password', { required: 'password id is required' })}
        />
        {errors.password && (
          <p style={{ color: 'red' }}>{errors.password.message}</p>
        )}
      </div>
      <div className="form-action">
        <Button type="submit">Sign In</Button>
      </div>
      <div>
        <Link to="/sign-up">Create Account</Link>
      </div>
    </form>
  );
};

export default SignInForm;
