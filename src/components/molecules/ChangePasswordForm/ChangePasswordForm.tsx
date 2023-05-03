import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import Button from '../../atoms/Button';
import ErrorMessage from '../../atoms/ErrorMessage';
import { CHANGE_PASSWORD } from '../../../constant/Mutation';
import { FormData } from '../../../type/UserType';
import './ChangePasswordForm.scss';

const ChangePasswordForm: React.FC<any> = () => {
  const [submitChangePassword] = useMutation(CHANGE_PASSWORD);
  const [newPassword, setNewPassword] = useState<String>('');
  const [errorMessage, setErrorMessage] = useState<String>('');
  const [isSuccess, setIsSuccess] = useState<Boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onChange' });
  const getErrorMessage = (message: String | undefined) => {
    return message && <p className="error-message">{message}</p>;
  };
  const onSubmit = (data: FormData, e: any) => {
    e.preventDefault();
    const { oldPassword, newPassword, confirmPassword } = data;
    if (oldPassword === newPassword) {
      return setErrorMessage('Old and New password should not be same');
    }
    if (oldPassword === newPassword || newPassword !== confirmPassword) {
      return setErrorMessage('Password does not match');
    }
    const changePasswordData = {
      oldPassword,
      newPassword,
    };
    submitChangePassword({
      variables: { changePasswordInput: changePasswordData },
    })
      .then((res: any) => {
        const { message, success } = res?.data?.changePassword;
        if (!success) {
          return setErrorMessage(message);
        }
        return setIsSuccess(success);
      })
      .catch((err) => {
        return setErrorMessage(err?.message);
      });
  };
  const closeError = (e: any) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSuccess(false);
  };
  return (
    <form
      name="change-password-form"
      className="container change-password-form"
      aria-label="change password form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="error-block">
        {errorMessage && (
          <ErrorMessage
            message={errorMessage}
            className="alert"
            onClick={closeError}
          />
        )}
        {isSuccess && (
          <ErrorMessage
            message="Your Password have been changed successfully."
            className="success"
            onClick={closeError}
          />
        )}
      </div>
      <div className="row change-password-container">
        <div className="col-xs-12">
          <label htmlFor="oldPassword" aria-label="old password">
            Old Password
          </label>
          <input
            type="password"
            id="oldPassword"
            autoComplete="off"
            aria-label="old password input"
            {...register('oldPassword', {
              required: 'Old Password is required',
              maxLength: {
                value: 15,
                message: 'You exceeded max length of 15 !',
              },
            })}
          />
          {getErrorMessage(errors?.oldPassword?.message)}
        </div>

        <div className="col-xs-12">
          <label htmlFor="newPassword" aria-label="new password">
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            autoComplete="off"
            aria-label="new password input"
            {...register('newPassword', {
              onBlur: (e) => setNewPassword(e.target.value),
              required: 'New Password is required',
              maxLength: {
                value: 15,
                message: 'You exceeded max length of 15 !',
              },
            })}
          />
          {getErrorMessage(errors?.newPassword?.message)}
        </div>

        <div className="col-xs-12">
          <label htmlFor="confirmPassword" aria-label="confirm password">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            autoComplete="off"
            aria-label="confirm password input"
            {...register('confirmPassword', {
              required: 'Confirm Password is required',
              validate: (value) =>
                value === newPassword || 'Password does not match',
              maxLength: {
                value: 15,
                message: 'You exceeded max length of 15 !',
              },
            })}
          />
          {getErrorMessage(errors?.confirmPassword?.message)}
        </div>
        <div className="col-xs-12 form-action">
          <Button type="submit">Sign Up</Button>
        </div>
      </div>
    </form>
  );
};

export default ChangePasswordForm;
