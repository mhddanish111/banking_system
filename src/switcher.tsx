import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Dashboard = lazy(() => import('./components/templates/Dashboard'));
const Account = lazy(() => import('./components/templates/Account'));
const AccountOpen = lazy(() => import('./components/templates/AccountOpen'));
const CreditCard = lazy(() => import('./components/templates/CreditCard'));
const CreditCardApply = lazy(
  () => import('./components/templates/CreditCardApply'),
);
const Profile = lazy(() => import('./components/templates/Profile'));
const SignIn = lazy(() => import('./components/templates/SignIn'));
const SignUp = lazy(() => import('./components/templates/SignUp'));
const ChangePassword = lazy(
  () => import('./components/templates/ChangePassword'),
);
const CreateAccount = lazy(
  () => import('./components/templates/CreateAccount'),
);
const NotFound = lazy(() => import('./components/templates/NotFound'));

const Switcher: React.FC<any> = () => {
  return (
    <Suspense fallback={<div />}>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/account" element={<Account />} />
        <Route path="/open-account" element={<AccountOpen />} />
        <Route path="/credit-card" element={<CreditCard />} />
        <Route path="/credit-card-apply" element={<CreditCardApply />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default Switcher;
