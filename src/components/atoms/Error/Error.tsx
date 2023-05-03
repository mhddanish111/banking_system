import React from 'react';
import './Error.scss';

type ErrorProps = {
  message: String;
};
const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <div className="error-container">
      <span>Something went wrong. Please try again</span>
      {message && <span>{message}</span>}
    </div>
  );
};

export default Error;
