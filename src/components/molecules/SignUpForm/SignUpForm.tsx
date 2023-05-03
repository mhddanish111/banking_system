import React, { useState } from 'react';
import { isEmpty } from 'lodash';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Button from '../../atoms/Button';
import Captcha from '../../atoms/Captcha';
import { FormData, CaptchaProps, SignUpFormProps } from './SignUpForm.Types';
import './SignUpForm.scss';

const SignUpForm: React.FC<SignUpFormProps> = ({ SignUpHandler }) => {
  const [password, setPassword] = useState<String>();
  const [govId, setGovId] = useState<String>('');
  const [reCaptchaStatus, setReCaptchaStatus] = useState<CaptchaProps>({
    valid: false,
    showErrorMsg: false,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onChange' });
  const onSubmit = (data: FormData, e: any) => {
    if (!reCaptchaStatus.valid) {
      return setReCaptchaStatus({ valid: false, showErrorMsg: true });
    }
    if (data.password !== data.confirmPassword) {
      return;
    }
    SignUpHandler(e, data);
  };
  const getErrorMessage = (message: String | undefined) => {
    return message && <p className="error-message">{message}</p>;
  };
  return (
    <form
      name="sign-up-form"
      className="row sign-up-form"
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      aria-label="sign in form"
    >
      <div className="col-sm-6 col-xs-12">
        <label htmlFor="firstName" aria-label="first name">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          autoComplete="off"
          {...register('firstName', {
            required: 'First name is required',
            maxLength: {
              value: 50,
              message: 'You exceeded max length of 5 !',
            },
          })}
        />
        {getErrorMessage(errors?.firstName?.message)}
      </div>
      <div className="col-sm-6 col-xs-12">
        <label htmlFor="lastName" aria-label="last name">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          autoComplete="off"
          {...register('lastName', {
            required: 'Last name is required',
            maxLength: {
              value: 50,
              message: 'You exceeded max length of 50 !',
            },
          })}
        />
        {getErrorMessage(errors?.lastName?.message)}
      </div>
      <div className="col-sm-6 col-xs-12">
        <label htmlFor="email" aria-label="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          autoComplete="off"
          {...register('email', {
            required: 'Email is required',
            maxLength: {
              value: 50,
              message: 'You exceeded max length of 50 !',
            },
          })}
        />
        {getErrorMessage(errors?.email?.message)}
      </div>

      <div className="col-sm-6 col-xs-12">
        <label htmlFor="mobile" aria-label="mobile number">
          Mobile
        </label>
        <input
          type="number"
          id="mobile"
          autoComplete="off"
          {...register('mobile', {
            required: 'Mobile is required',
            maxLength: {
              value: 10,
              message: 'You exceeded max length of 10 !',
            },
          })}
        />
        {getErrorMessage(errors?.mobile?.message)}
      </div>

      <div className="col-sm-6 col-xs-12">
        <label htmlFor="occupation" aria-label="occupation">
          Occupation
        </label>
        <input
          type="text"
          id="occupation"
          autoComplete="off"
          {...register('occupation', {
            required: 'Occupation is required',
            maxLength: {
              value: 50,
              message: 'You exceeded max length of 50 !',
            },
          })}
        />
        {getErrorMessage(errors?.occupation?.message)}
      </div>

      <div className="col-sm-6 col-xs-12">
        <label htmlFor="income" aria-label="income">
          Income
        </label>
        <select {...register('income', { required: 'Income is required' })}>
          <option value="">Select</option>
          <option value="belowOne">below 1 Lac</option>
          <option value="oneToFive">1 Lac to 5 Lac</option>
          <option value="fiveToTen">5 Lac to 10 Lac</option>
          <option value="moreThanTen">more than 10 Lac</option>
        </select>
        {getErrorMessage(errors?.income?.message)}
      </div>

      <div className="col-sm-6 col-xs-12">
        <label htmlFor="aadhaarNumber" aria-label="aadhaar number">
          Aadhaar Number
        </label>
        <input
          type="text"
          id="aadhaarNumber"
          autoComplete="off"
          {...register('aadhaarNumber', {
            required: 'aadhaar number is required',
            // pattern: {
            //   value: /^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/,
            //   message: "Aadhaar number is not valid",
            // },
            maxLength: {
              value: 15,
              message: 'You exceeded max length!',
            },
          })}
        />
        {getErrorMessage(errors?.aadhaarNumber?.message)}
      </div>

      <div className="col-sm-6 col-xs-12">
        <label htmlFor="panNumber" aria-label="pan card number">
          Pan card Number
        </label>
        <input
          type="text"
          id="panNumber"
          autoComplete="off"
          {...register('panNumber', {
            required: 'pan card number is required',
            // pattern: {
            //   value: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
            //   message: "Pan card number is not valid",
            // },
            maxLength: {
              value: 10,
              message: 'You exceeded max length!',
            },
          })}
        />
        {getErrorMessage(errors?.panNumber?.message)}
      </div>

      <div
        className={`${!isEmpty(govId) ? 'col-sm-6' : 'col-sm-12'} col-xs-12`}
      >
        <label htmlFor="govtId" aria-label="government id">
          Govt ID
        </label>
        <select
          {...register('govtId', {
            onChange: (e) => setGovId(e.target.value),
          })}
        >
          <option value="">Select</option>
          <option value="passport">Passport</option>
          <option value="electionIdCard">Election Commission ID Card</option>
        </select>
        {getErrorMessage(errors?.govtId?.message)}
      </div>

      {!isEmpty(govId) && (
        <div className="col-sm-6 col-xs-12">
          <label htmlFor="govtIdNumber" aria-label="government ID number">
            Government ID Number
          </label>
          <input
            type="text"
            id="govtIdNumber"
            autoComplete="off"
            {...register('govtIdNumber', {
              required: !isEmpty(govId)
                ? 'Government ID Number is required'
                : false,
              maxLength: {
                value: 30,
                message: 'You exceeded max length of 30 !',
              },
            })}
          />
          {getErrorMessage(errors?.govtIdNumber?.message)}
        </div>
      )}

      <div className="col-sm-6 col-xs-12">
        <label htmlFor="address" aria-label="address">
          Address
        </label>
        <input
          type="text"
          id="address"
          autoComplete="off"
          {...register('address', {
            required: 'Address is required',
            maxLength: {
              value: 50,
              message: 'You exceeded max length of 50 !',
            },
          })}
        />
        {getErrorMessage(errors?.address?.message)}
      </div>

      <div className="col-sm-6 col-xs-12">
        <label htmlFor="city" aria-label="city">
          City
        </label>
        <input
          type="text"
          id="city"
          autoComplete="off"
          {...register('city', {
            required: 'City is required',
            maxLength: {
              value: 50,
              message: 'You exceeded max length of 50 !',
            },
          })}
        />
        {getErrorMessage(errors?.city?.message)}
      </div>

      <div className="col-sm-6 col-xs-12">
        <label htmlFor="state" aria-label="state">
          State
        </label>
        <input
          type="text"
          id="state"
          autoComplete="off"
          {...register('state', {
            required: 'State is required',
            maxLength: {
              value: 50,
              message: 'You exceeded max length of 50 !',
            },
          })}
        />
        {getErrorMessage(errors?.state?.message)}
      </div>

      <div className="col-sm-6 col-xs-12">
        <label htmlFor="postalCode" aria-label="postal code">
          Postal Code
        </label>
        <input
          type="number"
          id="postalCode"
          autoComplete="off"
          {...register('postalCode', {
            required: 'Postal code is required',
            maxLength: {
              value: 6,
              message: 'You exceeded max length of 6 !',
            },
          })}
        />
        {getErrorMessage(errors?.postalCode?.message)}
      </div>

      <div className="col-sm-6 col-xs-12">
        <label htmlFor="password" aria-label="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          autoComplete="off"
          {...register('password', {
            onBlur: (e) => setPassword(e.target.value),
            required: 'Password is required',
            maxLength: {
              value: 15,
              message: 'You exceeded max length of 15 !',
            },
          })}
        />
        {getErrorMessage(errors?.password?.message)}
      </div>

      <div className="col-sm-6 col-xs-12">
        <label htmlFor="confirmPassword" aria-label="confirm password">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          autoComplete="off"
          {...register('confirmPassword', {
            required: 'Confirm password is required',
            validate: (value) =>
              value === password || 'Password does not match',
            maxLength: {
              value: 15,
              message: 'You exceeded max length of 15 !',
            },
          })}
        />
        {getErrorMessage(errors?.confirmPassword?.message)}
      </div>
      <div className="col-xs-12 form-action">
        <Captcha setReCaptchaStatus={setReCaptchaStatus} />
        {reCaptchaStatus.showErrorMsg &&
          !reCaptchaStatus.valid &&
          getErrorMessage('Captcha is not valid')}
      </div>

      <div className="col-xs-12 form-action">
        <Button type="submit">Sign Up</Button>
      </div>
      <div className="col-xs-12 sign-in-link">
        <Link to="/">Sign In</Link>
      </div>
    </form>
  );
};

export default SignUpForm;
