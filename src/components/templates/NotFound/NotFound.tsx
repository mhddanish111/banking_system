import React from 'react';
import Header from '../../organisms/Header';
import './NotFound.scss';

const NotFound: React.FC<any> = () => {
  return (
    <div className="not-found">
      <Header isDefault={false} />
      <main className="main-container">
        <p>404 Page Not Found !</p>
      </main>
    </div>
  );
};

export default NotFound;
