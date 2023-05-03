import React from 'react';
import Layout from '../Layout';
import ChangePasswordForm from '../../molecules/ChangePasswordForm';

const ChangePassword: React.FC<any> = () => {
  return (
    <Layout pageHeading="Change Password">
      <ChangePasswordForm />
    </Layout>
  );
};

export default ChangePassword;
