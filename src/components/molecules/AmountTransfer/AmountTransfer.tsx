import React, { useState, useEffect } from 'react';
import { filter, get, isEmpty, find, trim, parseInt } from 'lodash';
import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import Heading from '../../atoms/Heading';
import SelectDropdown from '../../atoms/SelectDropdown';
import Button from '../../atoms/Button';
import ErrorMessage from '../../atoms/ErrorMessage';
import { AccountTypeList } from '../../../constant';
import { DEPOSIT } from '../../../constant/Mutation';
import { accountDropdownList } from '../../../utils';
import { addAccounts, addCards } from '../../../context/actions';
import GetContext from '../../../context/GetContext';

type FormData = {
  accountNumber: string;
  amount: string;
};

const AmountTransfer: React.FC<any> = (props) => {
  const { dispatch }: any = GetContext();
  const [submitDeposit] = useMutation(DEPOSIT);
  const [errorMessage, setErrorMessage] = useState<String>('');
  const [isSuccess, setIsSuccess] = useState<Boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onChange' });
  const {
    state,
    type,
    selectedId,
    defaultAccountNumber,
    setIsCallTransaction,
  } = props;
  const [accountState, setAccountState] = useState<any>({
    type: '',
    selectedAccountList: [],
    selectedAccount: {},
    accountDropdown: [],
    selectedAccountNumber: '',
    selectedAccountType: '',
    selectedId,
  });

  useEffect(() => {
    if (selectedId !== accountState.selectedId) {
      setAccountState({
        type: '',
        selectedAccountList: [],
        selectedAccount: {},
        accountDropdown: [],
        selectedAccountNumber: '',
        selectedAccountType: '',
        selectedId,
      });
    }
  }, [accountState, selectedId]);
  const handlerAccount = (e: any) => {
    e.preventDefault();
    let { accounts, cards } = state;
    const { value } = e.target;
    if (type === 'Accounts') {
      accounts = filter(accounts, (item) => item._id !== selectedId);
    }
    if (type === 'Cards') {
      cards = filter(cards, (cardItem) => cardItem._id !== selectedId);
    }
    const other = { label: 'other', value: 'other' };
    if (value === 'Accounts') {
      const list = accountDropdownList(accounts);
      list.push(other);
      const singleAccount = get(accounts, ['0'], {});
      setAccountState({
        type: value,
        selectedAccountList: accounts,
        selectedAccount: singleAccount,
        accountDropdown: list,
        selectedAccountNumber: singleAccount?.accountNumber || '',
        selectedAccountType: singleAccount?.categoryName || 'other',
        selectedId,
      });
    }
    if (value === 'Cards') {
      const singleCard = get(cards, ['0'], {});
      const list = accountDropdownList(cards);
      list.push(other);
      setAccountState({
        type: value,
        selectedAccountList: cards,
        selectedAccount: singleCard,
        accountDropdown: list,
        selectedAccountNumber: singleCard?.accountNumber || '',
        selectedAccountType: singleCard?.categoryName || 'other',
        selectedId,
      });
    }
  };

  const handlerAccountType = (e: any) => {
    e.preventDefault();
    const { value } = e.target;
    const accountList = accountState?.selectedAccountList || [];
    const selectedData = find(accountList, (item) => item._id === value);
    setAccountState({
      ...accountState,
      selectedAccount: selectedData,
      selectedAccountNumber: selectedData?.accountNumber || '',
      selectedAccountType: selectedData?.categoryName || 'other',
    });
  };

  const handleInputChange = (e: any) => {
    e.preventDefault();
    const { value } = e.target;
    setAccountState({
      ...accountState,
      selectedAccountNumber: trim(value),
    });
  };
  const onSubmit = (data: FormData, e: any) => {
    e.preventDefault();
    const { accountNumber, amount } = data;
    const submitProps = {
      accountNumber: parseInt(defaultAccountNumber),
      payeeAccountNumber: parseInt(accountNumber),
      amount: parseFloat(amount),
      accountType: type,
    };
    submitDeposit({ variables: { depositInput: submitProps } })
      .then((res) => {
        const { accounts } = res?.data?.deposit;
        if (type === 'Accounts' && !isEmpty(accounts)) {
          dispatch(addAccounts(accounts));
        }
        if (type === 'Cards' && !isEmpty(accounts)) {
          dispatch(addCards(accounts));
        }
        setErrorMessage('');
        setAccountState({
          type: '',
          selectedAccountList: [],
          selectedAccount: {},
          accountDropdown: [],
          selectedAccountNumber: '',
          selectedAccountType: '',
          selectedId,
        });
        setIsCallTransaction(true);
        return setIsSuccess(true);
      })
      .catch((err) => {
        return setErrorMessage(err?.message);
      });
  };

  const getErrorMessage = (message: String | undefined) => {
    return message && <p className="error-message">{message}</p>;
  };

  const validateAmount = (value: any) => {
    const amount = accountState?.selectedAccount.amount || 0;
    const parseValue = parseFloat(value);
    const parseAmount = parseFloat(amount);
    let status = true;
    if (parseValue === 0 || parseAmount < parseValue) {
      status = false;
    }
    return status;
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
          Transfer Amount
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
        <SelectDropdown
          id="account"
          name="account"
          label="Select Account"
          options={AccountTypeList}
          placeholder="Select"
          value={accountState.type}
          onChange={(e: any) => handlerAccount(e)}
        />
      </div>
      {!isEmpty(accountState.accountDropdown) && (
        <>
          <div className="col-xs-12">
            <SelectDropdown
              id="accountType"
              name="accountType"
              label={`Select ${accountState?.type} Type`}
              options={accountState.accountDropdown}
              value={accountState?.selectedAccount?._id || 'other'}
              onChange={(e: any) => handlerAccountType(e)}
            />
          </div>
          <div className="col-xs-12">
            <label htmlFor="accountNumber">{`${accountState?.type} Number*`}</label>
            <input
              type="text"
              id="accountNumber"
              value={accountState?.selectedAccountNumber}
              {...register('accountNumber', {
                required: `${accountState?.type} Number is required`,
                maxLength: {
                  value: 20,
                  message: 'You exceeded max length of 50 !',
                },
              })}
              onChange={(e) => handleInputChange(e)}
            />
            {getErrorMessage(errors?.accountNumber?.message)}
          </div>
          <div className="col-xs-12">
            <label htmlFor="amount">Enter Amount*</label>
            <input
              type="number"
              id="amount"
              {...register('amount', {
                required: `Please Enter Amount`,
                validate: (value) =>
                  validateAmount(value) || 'Amount is not valid',
                maxLength: {
                  value: 20,
                  message: 'You exceeded max length of 50 !',
                },
              })}
            />
            {getErrorMessage(errors?.amount?.message)}
          </div>
          <div className="col-xs-12">
            <Button type="submit">Transfer</Button>
          </div>
        </>
      )}
    </form>
  );
};

export default AmountTransfer;
