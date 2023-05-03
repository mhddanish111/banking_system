import React, { SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Heading from '../../atoms/Heading';
import Button from '../../atoms/Button';
import './EmptyDashboard.scss';

const EmptyDashboard: React.FC<any> = () => {
  const navigate = useNavigate();
  const openAccountHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    navigate('/open-account');
  };
  const applyCreditCardHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    navigate('/credit-card-apply');
  };
  return (
    <section className="empty-dashboard-container">
      <div className="container">
        <Heading HeadingType="h2" ariaLabel="Welcome to Publicis Sapient Bank">
          Welcome to Publicis Sapient Bank
        </Heading>
        <Button onClick={openAccountHandler}>Open Account</Button>
        <Button onClick={applyCreditCardHandler}>Apply Credit Card</Button>
      </div>
    </section>
  );
};

export default EmptyDashboard;
