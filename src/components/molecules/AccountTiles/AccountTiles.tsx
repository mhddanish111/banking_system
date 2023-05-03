import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { split } from 'lodash';
import { Account } from '../../../type/AccountType';
import './AccountTiles.scss';

const AccountTiles: React.FC<Account> = React.memo(({ accounts }: Account) => {
  const { categoryName, accountNumber, amount, accountType } = accounts || {};
  const getCategory = (): string => {
    const categoryData = split(categoryName, ' ', 1);
    return categoryData[0];
  };
  return (
    accounts && (
      <div className="col-sm-3 col-md-4 col-lg-3 col-xs-12 account-tiles">
        <div className="col-xs-12 account-category-section">
          <div className="col-sm-6 col-xs-7 start-xs">
            <div className="box account-type-section">
              <span>{accountType}</span>
            </div>
          </div>
          <div className="col-sm-6 col-xs-5 end-xs">
            <span className="box">{getCategory()}</span>
          </div>
        </div>

        <div className="col-xs-12 middle-xs">
          <div className="box account-details">
            <span className="account-number">{accountNumber}</span>
            <span>Available Balance</span>
            <span>{`₹ ${amount}`}</span>
          </div>
        </div>

        <div className="col-xs-12 account-bottom">
          <div className="col-sm-4 col-xs-5 start-xs">
            <Link to="/account" className="box">
              Statement
            </Link>
          </div>
          <div className="col-sm-4 col-xs-4 center-xs center-box">
            <Link to="/" className="box">
              Debit
            </Link>
          </div>
          <div className="col-sm-4 col-xs-3 end-xs">
            <Link to="/account" className="box">
              Pay
            </Link>
          </div>
        </div>
      </div>
    )
  );
});

export default AccountTiles;
