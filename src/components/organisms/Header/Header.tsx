import React from 'react';
import { isEmpty } from 'lodash';
import { Link, useNavigate } from 'react-router-dom';
import GetContext from '../../../context/GetContext';
import { deleteCookie } from '../../../utils';
import { resetContext } from '../../../context/actions';
import './Header.scss';

type headerProps = {
  isDefault?: Boolean;
};

const Header: React.FC<headerProps> = React.memo(({ isDefault = true }) => {
  const { dispatch, state = {} }: any = GetContext();
  const navigate = useNavigate();
  const { userProfile = {} } = state;
  const { firstName = '', lastName = '' } = userProfile;
  const handler = () => {
    const nav = document.querySelector('.nav-container');
    if (nav) {
      nav?.classList.toggle('nav-close');
    }
  };
  const handleLogOut = (e: any) => {
    e.preventDefault();
    deleteCookie();
    dispatch(resetContext());
    navigate('/');
  };
  return (
    <header>
      <div className="logo-container">
        <div className="logo">Publics Sapient</div>
      </div>

      {isDefault && (
        <div className="user-container">
          <div className="my-account-user">
            {(!isEmpty(lastName) || !isEmpty(lastName)) && (
              <p>{`Hello ${firstName} ${lastName}`}</p>
            )}
          </div>
          <div className="my-account-dropdown">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180014/profile-removebg-preview.png"
              className="user-icn"
              alt="user"
              height="42px"
              width="42px"
            />
            <div className="my-account-dropdown-content">
              <Link to="/profile">My Profile</Link>
              <Link to="/change-password">Change Password</Link>
              <a href="/#" className="logout" onClick={(e) => handleLogOut(e)}>
                Logout
              </a>
            </div>
          </div>

          <div className="hamburger" onClick={() => handler()}>
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182541/Untitled-design-(30).png"
              className="icn hamburger-icon"
              id="hamburger-icon"
              alt="hamburger-icon"
              height="42px"
              width="42px"
            />
          </div>
        </div>
      )}
      {!isDefault && (
        <div className="user-container">
          <Link to="/">Sign In</Link>
          <Link to="/sign-up">Create Account</Link>
        </div>
      )}
    </header>
  );
});

export default Header;
