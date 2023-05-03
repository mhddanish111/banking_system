import React from 'react';
import { useQuery } from '@apollo/client';
import Layout from '../Layout';
import Error from '../../atoms/Error';
import { USER_DETAILS } from '../../../constant/Query';
import './Profile.scss';

const Profile: React.FC<any> = () => {
  const { loading, error, data } = useQuery(USER_DETAILS);
  if (loading) {
    return null;
  }
  if (error) {
    return (
      <Layout pageHeading="My Profile">
        <Error message={error?.message} />
      </Layout>
    );
  }
  const {
    firstName,
    lastName,
    email,
    mobile,
    occupation,
    income,
    aadhaarNumber,
    panNumber,
    address,
    city,
    state,
    postalCode,
  } = data?.userDetails || {};
  return (
    <Layout pageHeading="My Profile">
      <div className="row profile-container">
        <div className="col-sm-6 col-xs-12">
          <div className="row profile-box">
            <label htmlFor="name" className="col-xs-6" aria-label="name">
              Name
            </label>
            <div
              id="name"
              className="col-xs-6 profile-text"
            >{`${firstName} ${lastName}`}</div>
          </div>
          <div className="row profile-box">
            <label htmlFor="email" className="col-xs-6" aria-label="email">
              Email
            </label>
            <span id="email" className="col-xs-6 profile-text">
              {email}
            </span>
          </div>
          <div className="row profile-box">
            <label htmlFor="mobile" className="col-xs-6" aria-label="mobile">
              Mobile
            </label>
            <span id="mobile" className="col-xs-6 profile-text">
              {mobile}
            </span>
          </div>
          <div className="row profile-box">
            <label htmlFor="address" className="col-xs-6" aria-label="address">
              Address
            </label>
            <div id="address" className="col-xs-6 profile-text">
              <span>{`${address} ${city} `}</span>
              <span>{`${state} ${postalCode}`}</span>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-xs-12">
          <div className="row profile-box">
            <label
              htmlFor="occupation"
              className="col-xs-6"
              aria-label="occupation"
            >
              Occupation
            </label>
            <span id="occupation" className="col-xs-6 profile-text">
              {occupation}
            </span>
          </div>
          <div className="row profile-box">
            <label htmlFor="income" className="col-xs-6" aria-label="income">
              Income
            </label>
            <span id="income" className="col-xs-6 profile-text">
              {income}
            </span>
          </div>
          <div className="row profile-box">
            <label htmlFor="aadhar" className="col-xs-6" aria-label="aadhar">
              Aadhaar Number
            </label>
            <span id="aadhar" className="col-xs-6 profile-text">
              {aadhaarNumber}
            </span>
          </div>
          <div className="row profile-box">
            <label htmlFor="pan" className="col-xs-6" aria-label="pan">
              Pan Number
            </label>
            <span id="pan" className="col-xs-6 profile-text">
              {panNumber}
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
