import React from 'react';
import Layout from '../Layout';
import AccountTransaction from '../../organisms/AccountTransaction';

const CreditCard: React.FC<any> = () => {
  return (
    <Layout pageHeading="Credit Card">
      <AccountTransaction transactionType="Cards" />
    </Layout>
  );
};

export default CreditCard;
