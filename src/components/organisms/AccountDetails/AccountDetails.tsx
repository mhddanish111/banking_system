import React from 'react';
import { get, isEmpty } from 'lodash';
import { AccountDetailsProps } from '../../../type/AccountType';
import './AccountDetails.scss';

const AccountDetails: React.FC<any> = (props: AccountDetailsProps) => {
  const { accountDetails } = props;
  const { categoryName, accountNumber, amount, limit, users, type } =
    accountDetails;
  const getAccountHolderName = () => {
    const { firstName, lastName } = get(users, ['0'], {});
    let name = '';
    if (!isEmpty(firstName) || !isEmpty(lastName)) {
      name = `${firstName} ${lastName}`;
    }
    return name;
  };
  return (
    <div className="col-xs-12 details-container">
      <div className="row account-details-box">
        <label className="col-xs-6">{type}</label>
        <div className="col-xs-6 profile-text">{categoryName}</div>
      </div>
      <div className="row account-details-box">
        <label className="col-xs-6">{`${type} Holder Name`}</label>
        <div className="col-xs-6 profile-text">{getAccountHolderName()}</div>
      </div>
      <div className="row account-details-box">
        <label className="col-xs-6">{`${type} Number`}</label>
        <div className="col-xs-6 profile-text">{accountNumber}</div>
      </div>
      <div className="row account-details-box">
        <label className="col-xs-6">{`Available ${
          type === 'Cards' ? 'Limit' : 'Amount'
        }`}</label>
        <div className="col-xs-6 profile-text">
          {type === 'Cards' ? limit : amount}
        </div>
      </div>
      {type === 'Cards' && (
        <div className="row account-details-box">
          <label className="col-xs-6">Available Amount</label>
          <div className="col-xs-6 profile-text">{amount}</div>
        </div>
      )}

      {type === 'Cards' && (
        <div className="row account-details-box">
          <label className="col-xs-6">Due Amount </label>
          <div className="col-xs-6 profile-text">{amount - limit}</div>
        </div>
      )}
    </div>
  );
};

export default AccountDetails;
