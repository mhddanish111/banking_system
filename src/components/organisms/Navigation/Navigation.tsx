import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GetContext from '../../../context/GetContext';
import { deleteCookie } from '../../../utils';
import { resetContext } from '../../../context/actions';
import './Navigation.scss';

const Navigation: React.FC = React.memo(() => {
  const { dispatch }: any = GetContext();
  const navigate = useNavigate();
  const handleLogOut = (e: any) => {
    e.preventDefault();
    deleteCookie();
    dispatch(resetContext());
    navigate('/');
  };
  return (
    <div className="nav-container">
      <nav className="nav">
        <div className="nav-upper-options">
          <div className="nav-option option1">
            <Link to="/dashboard">
              <h3>Dashboard</h3>
            </Link>
          </div>

          <div className="nav-option">
            <Link to="/account">
              <h3>Account</h3>
            </Link>
          </div>

          <div className="nav-option">
            <Link to="/credit-card">
              <h3>Credit Card</h3>
            </Link>
          </div>

          <div className="nav-option">
            <Link to="/create-account">
              <h3>Create Account</h3>
            </Link>
          </div>

          <div className="nav-option">
            <Link to="/profile">
              <h3> Profile</h3>
            </Link>
          </div>

          <div className="nav-option logout">
            <a href="/#" onClick={(e) => handleLogOut(e)}>
              <h3>Logout</h3>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
});

export default Navigation;
