import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { isEmpty } from 'lodash';
import { useMutation } from '@apollo/client';
import Heading from '../../atoms/Heading';
import Button from '../../atoms/Button';
import ErrorMessage from '../../atoms/ErrorMessage';
import { WITHDRAWAL } from '../../../constant/Mutation';
import { addAccounts, addCards } from '../../../context/actions';
import GetContext from '../../../context/GetContext';

type FormData = {
  amount: string;
};

const AmountWithDrawl: React.FC<any> = (props) => {
  const { dispatch }: any = GetContext();
  const [errorMessage, setErrorMessage] = useState<String>('');
  const [isSuccess, setIsSuccess] = useState<Boolean>(false);
  const [submitWithdrawal] = useMutation(WITHDRAWAL);
  const {
    defaultAccountNumber,
    setIsCallTransaction,
    type,
    amount = 0,
  } = props;
  const onSubmit = (data: FormData, e: any) => {
    e.preventDefault();
    const { amount } = data;
    const submitProps = {
      accountNumber: parseInt(defaultAccountNumber),
      amount: parseFloat(amount),
      accountType: type,
    };
    submitWithdrawal({ variables: { withdrawalInput: submitProps } })
      .then((res) => {
        const { accounts } = res?.data?.withdrawal;
        if (type === 'Accounts' && !isEmpty(accounts)) {
          dispatch(addAccounts(accounts));
        }
        if (type === 'Cards' && !isEmpty(accounts)) {
          dispatch(addCards(accounts));
        }
        setErrorMessage('');
        setIsCallTransaction(true);
        return setIsSuccess(true);
      })
      .catch((err) => {
        return setErrorMessage(err?.message);
      });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onChange' });
  const validateAmount = (value: any) => {
    const parseValue = parseFloat(value);
    const parseAmount = parseFloat(amount);
    let status = true;
    if (parseValue === 0 || parseAmount < parseValue) {
      status = false;
    }
    return status;
  };
  const getErrorMessage = (message: String | undefined) => {
    return message && <p className="error-message">{message}</p>;
  };
  const closeError = (e: any) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSuccess(false);
  };
  return (
    <form className="row" onSubmit={handleSubmit(onSubmit)}>
      <div className="col-xs-12">
        <Heading HeadingType="h3" ariaLabel="transfer amount">
          Withdraw your Amount
        </Heading>
      </div>
      <div className="col-xs-12 error-block">
        {errorMessage && (
          <ErrorMessage
            message={errorMessage}
            className="alert"
            onClick={closeError}
          />
        )}
        {isSuccess && (
          <ErrorMessage
            message="Your Transaction have been success."
            className="success"
            onClick={closeError}
          />
        )}
      </div>
      <div className="col-xs-12">
        <label htmlFor="amount">Enter Amount*</label>
        <input
          type="number"
          id="amount"
          aria-label="amount"
          {...register('amount', {
            required: `Please Enter Amount`,
            validate: (value) => validateAmount(value) || 'Amount is not valid',
            maxLength: {
              value: 20,
              message: 'You exceeded max length of 50 !',
            },
          })}
        />
        {getErrorMessage(errors?.amount?.message)}
      </div>
      <div className="col-xs-12">
        <Button type="submit" aria-label="submit">
          Withdraw Amount
        </Button>
      </div>
    </form>
  );
};

export default AmountWithDrawl;
