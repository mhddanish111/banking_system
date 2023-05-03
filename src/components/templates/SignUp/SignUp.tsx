import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import Header from '../../organisms/Header';
import Heading from '../../atoms/Heading';
import SignUpForm from '../../molecules/SignUpForm';
import ErrorMessage from '../../atoms/ErrorMessage';
import { FormData } from '../../molecules/SignUpForm/SignUpForm.Types';
import { CREATE_USER } from '../../../constant/Mutation';
import './SignUp.scss';

const SignUp: React.FC<any> = (): any => {
  const [createUserHandler] = useMutation(CREATE_USER);
  const [errorMessage, setErrorMessage] = useState<String>('');
  const [isSignUpSuccess, setSignUpSuccess] = useState<Boolean>(false);
  const SignUpHandler = (e: any, data: FormData) => {
    e.preventDefault();
    createUserHandler({ variables: { userInput: data } })
      .then((res) => {
        const { message } = res?.data?.createUser;
        if (message) {
          setErrorMessage(message);
          window.scroll(0, 0);
        } else {
          setErrorMessage('');
          setSignUpSuccess(true);
        }
      })
      .catch((err) => {
        setErrorMessage(err?.message);
      });
  };
  const closeError = (e: any) => {
    e.preventDefault();
    setErrorMessage('');
  };
  return (
    <div className="sign-up">
      <Header isDefault={false} />
      <main className="main-container">
        <div className="sign-up-container">
          <Heading
            HeadingType="h1"
            className="sign-up-heading"
            ariaLabel="sign up title"
          >
            Create Account
          </Heading>
          {errorMessage && (
            <ErrorMessage
              message={errorMessage}
              className="alert"
              onClick={closeError}
            />
          )}
          {isSignUpSuccess && (
            <ErrorMessage
              message="Welcome to Publicis Sapient Bank, Please login"
              className="success"
              onClick={closeError}
            >
              <Link to="/">Sign In</Link>
            </ErrorMessage>
          )}
          {!isSignUpSuccess && <SignUpForm SignUpHandler={SignUpHandler} />}
        </div>
      </main>
    </div>
  );
};

export default SignUp;
