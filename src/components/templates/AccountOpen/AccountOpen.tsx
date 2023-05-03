import React from 'react';
import Layout from '../Layout';
import AccountForm from '../../organisms/AccountForm';

const AccountOpen: React.FC<any> = () => {
  return (
    <Layout pageHeading="Open Account">
      <AccountForm type="Accounts" />
    </Layout>
  );
};

export default AccountOpen;
