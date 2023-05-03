import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../../../context/actions';
import Header from '../../organisms/Header';
import Heading from '../../atoms/Heading';
import SignInForm from '../../molecules/SignInForm';
import ErrorMessage from '../../atoms/ErrorMessage';
import { LOGIN_USER } from '../../../constant/Query';
import { setCookie } from '../../../utils';
import GetContext from '../../../context/GetContext';
import './SignIn.scss';

type formData = {
  user: string;
  password: string;
};

const SignIn: React.FC<any> = (): any => {
  const context = GetContext();
  const { dispatch }: any = context;
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState<String>('');
  const [getLogin] = useLazyQuery(LOGIN_USER);
  const SignInHandler = (signInData: formData, e: any) => {
    e.preventDefault();
    const { user, password } = signInData;
    const logInInput = {
      email: user,
      password,
    };
    getLogin({ variables: { logInInput } })
      .then((res) => {
        if (res.data) {
          const {
            isValid,
            message,
            firstName,
            lastName,
            token,
            userType,
            userId,
          } = res.data?.login || {};
          if (!isValid) {
            setLoginError(message);
          } else {
            const data = {
              firstName,
              lastName,
              userType,
              userId,
            };
            dispatch(addUser(data));
            setCookie(token, 1);
            navigate('/dashboard');
          }
        }
      })
      .catch((error) => {
        if (error) {
          setLoginError(error.message);
        }
      });
  };
  const closeError = (e: any) => {
    e.preventDefault();
    setLoginError('');
  };
  return (
    <div className="sign-in">
      <Header isDefault={false} />
      <main className="main-container">
        <div className="sign-in-container">
          <Heading
            HeadingType="h1"
            className="sign-in-heading"
            ariaLabel="sign in title"
          >
            Sign In
          </Heading>
          {loginError && (
            <ErrorMessage
              message={loginError}
              className="alert"
              onClick={closeError}
            />
          )}
          <SignInForm SignInHandler={SignInHandler} />
        </div>
      </main>
    </div>
  );
};

export default SignIn;
