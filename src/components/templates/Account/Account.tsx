import React from 'react';
import Layout from '../Layout';
import AccountTransaction from '../../organisms/AccountTransaction';
import './Account.scss';

const Account: React.FC<any> = () => {
  return (
    <Layout pageHeading="Account">
      <AccountTransaction transactionType="Accounts" />
    </Layout>
  );
};

export default Account;
