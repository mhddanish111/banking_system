import React from 'react';
import { isEmpty, get, filter } from 'lodash';
import { useQuery } from '@apollo/client';
import Layout from '../Layout';
import Error from '../../atoms/Error';
import EmptyDashboard from '../../organisms/EmptyDashboard';
import AccountDashboard from '../../organisms/AccountDashboard';
import { GET_ACCOUNTS } from '../../../constant/Query';
import { AccountDashboardProps } from '../../../type/AccountType';

const Dashboard: React.FC<any> = () => {
  let accountTypeData: Array<AccountDashboardProps> = [];
  let creditCardData: Array<AccountDashboardProps> = [];
  const { loading, error, data } = useQuery(GET_ACCOUNTS, {
    fetchPolicy: 'network-only',
  });
  if (loading) {
    return null;
  }
  if (error) {
    return (
      <Layout pageHeading="Dashboard">
        <Error message={error?.message} />
      </Layout>
    );
  }
  const accountData = get(data, 'accounts', []);
  if (accountData) {
    accountTypeData = filter(accountData, (item) => item.type === 'Accounts');
    creditCardData = filter(accountData, (item) => item.type === 'Cards');
  }
  return (
    <Layout pageHeading="Dashboard">
      {isEmpty(accountData) && <EmptyDashboard />}
      {!isEmpty(accountData) && (
        <AccountDashboard
          accountData={accountData}
          accountTypeData={accountTypeData}
          creditCardData={creditCardData}
        />
      )}
    </Layout>
  );
};

export default Dashboard;
