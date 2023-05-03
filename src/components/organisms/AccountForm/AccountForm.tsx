import React, { useState } from 'react';
import { filter, isEmpty } from 'lodash';
import { useQuery, useMutation } from '@apollo/client';
import Heading from '../../atoms/Heading';
import Button from '../../atoms/Button';
import ErrorMessage from '../../atoms/ErrorMessage';
import Error from '../../atoms/Error';
import { GET_ACCOUNT_TYPES } from '../../../constant/Query';
import { OPEN_ACCOUNT } from '../../../constant/Mutation';
import {
  CategoryProps,
  AccountTypeProps,
  AccountFormProps,
  SubmitProps,
} from '../../../type/AccountFormType';
import './AccountForm.scss';

const AccountOpenForm: React.FC<AccountFormProps> = ({ type }) => {
  const [errorMessage, setErrorMessage] = useState<String>('');
  const [success, setSuccess] = useState<String>('');
  const { loading, error, data } = useQuery(GET_ACCOUNT_TYPES);
  const [openAccountMutation] = useMutation(OPEN_ACCOUNT);
  if (loading) {
    return null;
  }
  if (error) {
    return <Error message={error?.message} />;
  }
  let accountTypeData = data?.accountType || [];
  if (accountTypeData && !isEmpty(type)) {
    accountTypeData = filter(accountTypeData, (item) => item.type === type);
  }
  const handleButtonSubmit = (e: any, submitData: SubmitProps) => {
    e.preventDefault();
    const accountInputData = {
      ...submitData,
    };
    openAccountMutation({ variables: { accountInput: accountInputData } })
      .then((res: any) => {
        const { message, accountType, categoryName, accountNumber } =
          res?.data?.createAccount;
        if (!isEmpty(message)) {
          setErrorMessage(message);
        } else {
          const successMessage = `Your ${accountType} have been processed successfully and your ${categoryName} number is ${accountNumber}`;
          setSuccess(successMessage);
        }
      })
      .catch((err) => {
        setErrorMessage(err?.message);
      });
  };
  const closeError = (e: any) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccess('');
  };
  return (
    <div className="row">
      <div className="col-xs-12 error-block">
        {errorMessage && (
          <ErrorMessage
            message={errorMessage}
            className="alert"
            onClick={closeError}
          />
        )}
        {success && (
          <ErrorMessage
            message={success}
            className="success"
            onClick={closeError}
          />
        )}
      </div>
      {accountTypeData.map((accountTypeItem: AccountTypeProps) => {
        const { name, category, _id } = accountTypeItem;
        return (
          <div className="col-xs-12" key={`${name}_${accountTypeItem.type}`}>
            <Heading HeadingType="h2" ariaLabel="saving account">
              {name}
            </Heading>
            <div className="row account-box-container">
              {category?.map((item: CategoryProps, index: Number) => {
                const uniqueKey = `category-${index}`;
                const {
                  name: categoryName,
                  charge,
                  limit,
                  maxAmount,
                  minAmount,
                } = item;
                return (
                  <div
                    className="col-sm-4 col-md-3 col-lg-3 col-xs-12 account-box"
                    key={uniqueKey}
                  >
                    <Heading HeadingType="h3" ariaLabel="regular account">
                      {item.name}
                    </Heading>
                    {item.benefit.map((benefitData, benefitIndex) => {
                      const key = `benefit-${benefitIndex}`;
                      return <span key={key}>{benefitData}</span>;
                    })}
                    <Button
                      onClick={(e: any) =>
                        handleButtonSubmit(e, {
                          accountTypeId: _id,
                          accountType: name,
                          categoryId: item._id,
                          categoryName,
                          charge,
                          limit,
                          maxAmount,
                          minAmount,
                          type: accountTypeItem.type,
                        })
                      }
                    >
                      Open Account
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AccountOpenForm;
