import React, { ReactNode } from 'react';
import './ErrorMessage.scss';

type ErrorProps = {
  className?: string;
  message?: string;
  children?: ReactNode;
  onClick?: (e: any) => void;
};
const ErrorMessage: React.FC<ErrorProps | any> = (props) => {
  const { className, message, onClick, children } = props;
  return (
    message && (
      <div className={`error-message-container ${className}`}>
        <div className="message-container">
          <span className="close-btn" onClick={(e) => onClick(e)}>
            &times;
          </span>
          {message}
        </div>
        <div className="child-container">{children}</div>
      </div>
    )
  );
};

export default ErrorMessage;
