import React from 'react';
import Layout from '../Layout';
import EmptyDashboard from '../../organisms/EmptyDashboard';

const CreateAccount: React.FC<any> = () => {
  return (
    <Layout pageHeading="Open Account">
      <EmptyDashboard />
    </Layout>
  );
};

export default CreateAccount;
