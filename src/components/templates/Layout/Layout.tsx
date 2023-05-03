import React, { useEffect } from 'react';
import { isEmpty } from 'lodash';
import { useNavigate } from 'react-router-dom';
import Heading from '../../atoms/Heading';
import Header from '../../organisms/Header';
import Navigation from '../../organisms/Navigation';
import { getCookie } from '../../../utils';
import './Layout.scss';

type LayoutProps = {
  children: React.ReactNode;
  pageHeading?: String;
};
const Layout: React.FC<LayoutProps> = React.memo(
  ({ children, pageHeading }) => {
    const navigate = useNavigate();
    const token = getCookie();
    useEffect(() => {
      if (isEmpty(token)) {
        return navigate('/');
      }
    }, [token, navigate]);
    return (
      <>
        <Header />
        <div className="main-container">
          <Navigation />
          <main className="main">
            {pageHeading && (
              <Heading
                HeadingType="h1"
                className="page-heading"
                ariaLabel={pageHeading}
              >
                {pageHeading}
              </Heading>
            )}
            {children}
          </main>
        </div>
      </>
    );
  },
);

export default Layout;
