import React from 'react';
import Layout from '../Layout';
import AccountForm from '../../organisms/AccountForm';

const CreditCardApply: React.FC<any> = () => {
  return (
    <Layout pageHeading="Apply Credit Card">
      <AccountForm type="Cards" />
    </Layout>
  );
};

export default CreditCardApply;
