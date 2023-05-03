import React, { useEffect } from 'react';
import { isEmpty } from 'lodash';
import Heading from '../../atoms/Heading';
import AccountTiles from '../../molecules/AccountTiles';
import CardTiles from '../../molecules/CardTiles';
import { AccountData } from '../../../type/AccountType';
import GetContext from '../../../context/GetContext';
import { addAccounts, addCards } from '../../../context/actions';
import './AccountDashboard.scss';

const AccountDashboard: React.FC<AccountData> = (props: AccountData) => {
  const { accountTypeData = [], creditCardData = [] } = props;
  const { dispatch, state = {} }: any = GetContext();
  const { accounts = [], cards = [] } = state;
  useEffect(() => {
    if (isEmpty(accounts) && accountTypeData?.length > 0) {
      dispatch(addAccounts(accountTypeData));
    }
    if (isEmpty(cards) && creditCardData?.length > 0) {
      dispatch(addCards(creditCardData));
    }
  }, [accounts, cards, accountTypeData, creditCardData, dispatch]);
  return (
    <div className="row account-dashboard-container">
      {!isEmpty(accountTypeData) && (
        <section id="account-section" className="col-xs-12">
          <Heading
            HeadingType="h2"
            className="col-xs-12"
            ariaLabel="account heading"
          >
            Accounts
          </Heading>
          <div className="col-xs-12 account-container">
            {accountTypeData.map((accounts, index) => {
              const key = `account-tiles-${index}`;
              return <AccountTiles accounts={accounts} key={key} />;
            })}
          </div>
        </section>
      )}

      {!isEmpty(creditCardData) && (
        <section id="account-section" className="col-xs-12 card-section">
          <Heading
            HeadingType="h2"
            className="col-xs-12"
            ariaLabel="account heading"
          >
            Credit Cards
          </Heading>
          <div className="col-xs-12 account-container">
            {creditCardData.map((cards, index) => {
              const key = `account-tiles-${index}`;
              return <CardTiles cards={cards} key={key} />;
            })}
          </div>
        </section>
      )}
    </div>
  );
};

export default AccountDashboard;
