import React from 'react';
import { split, get } from 'lodash';
import { Link } from 'react-router-dom';
import { cardNumberFormat } from '../../../utils';
import { Cards } from '../../../type/AccountType';
import './CardTiles.scss';

const CardTiles: React.FC<Cards> = ({ cards }: Cards) => {
  const { categoryName, accountNumber, expiryMonth, expiryYear, users } =
    cards || {};
  const getCategory = (): string => {
    const categoryData = split(categoryName, ' ', 1);
    return categoryData[0];
  };
  const firstName = get(users, ['0', 'firstName'], '');
  const lastName = get(users, ['0', 'lastName'], '');
  const month = expiryMonth < 10 ? `0${expiryMonth}` : expiryMonth;
  return (
    cards && (
      <div className="col-sm-3 col-md-4 col-lg-3 col-xs-12 card-tiles">
        <div className="col-xs-12 account-category-section">
          <div className="col-xs-12 end-xs">
            <span className="box">{getCategory()}</span>
          </div>
        </div>

        <div className="col-xs-12 middle-xs">
          <div className="box card-details">
            <span className="card-number">
              {accountNumber && cardNumberFormat(`${accountNumber}`)}
            </span>
          </div>
        </div>
        <div className="col-xs-12 card-exp">
          <div className="col-xs-6 start-xs">
            {(firstName || lastName) && (
              <span>{`${firstName} ${lastName}`}</span>
            )}
          </div>
          <div className="col-xs-6 end-xs">
            <span>{`Exp: ${month}/${expiryYear}`}</span>
          </div>
        </div>
        <div className="col-xs-12 card-bottom">
          <div className="col-xs-6 start-xs start-box">
            <Link to="/credit-card" className="box">
              Details
            </Link>
          </div>
          <div className="col-xs-6 end-xs">
            <Link to="/credit-card" className="box">
              Pay
            </Link>
          </div>
        </div>
      </div>
    )
  );
};

export default CardTiles;
