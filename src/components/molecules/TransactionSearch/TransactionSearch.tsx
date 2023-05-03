import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../atoms/Button';
import RadioButton from '../../atoms/RadioButton';
import './TransactionSearch.scss';

type SearchProps = {
  fromDate: string;
  toDate: string;
  customSearch: boolean;
  last10Transaction: boolean;
  showAll: boolean;
};
const TransactionSearch: React.FC<any> = ({
  searchHandler,
  search,
  setSearch,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchProps>();
  const onSubmit = (data: SearchProps, e: any) => {
    e.preventDefault();
    searchHandler(data);
  };
  const handleRadioChange = (value: string) => {
    let showAll = false;
    let last10Transaction = false;
    let customSearch = false;
    if (value === 'showAll') {
      showAll = true;
    }
    if (value === 'last10Transaction') {
      last10Transaction = true;
    }
    if (value === 'customSearch') {
      customSearch = true;
    }
    setSearch({ showAll, last10Transaction, customSearch });
  };
  return (
    <form className="row" onSubmit={handleSubmit(onSubmit)}>
      <div className="col-xs-12">
        <RadioButton
          id="showAll"
          value="showAll"
          checked={search.showAll}
          onSelect={(value: string) => handleRadioChange(value)}
        >
          Show All
        </RadioButton>
        <RadioButton
          id="last10Transaction"
          value="last10Transaction"
          checked={search.last10Transaction}
          onSelect={(value: string) => handleRadioChange(value)}
        >
          Last 10 Transaction
        </RadioButton>
        <RadioButton
          id="customSearch"
          value="customSearch"
          checked={search.customSearch}
          onSelect={(value: string) => handleRadioChange(value)}
        >
          Custom Search
        </RadioButton>
      </div>
      {search.customSearch && (
        <>
          <div className="col-sm-3 col-xs-12">
            <label htmlFor="fromDate">From Date</label>
            <input
              type="date"
              id="fromDate"
              {...register('fromDate', { required: 'from date is required' })}
            />
            {errors.fromDate && (
              <p style={{ color: 'red' }}>{errors.fromDate.message}</p>
            )}
          </div>
          <div className="col-sm-3 col-xs-12">
            <label htmlFor="toDate">To Date</label>
            <input
              type="date"
              id="toDate"
              {...register('toDate', { required: 'to date is required' })}
            />
            {errors.toDate && (
              <p style={{ color: 'red' }}>{errors.toDate.message}</p>
            )}
          </div>
        </>
      )}
      <div className="col-xs-12">
        <Button type="submit" className="search-btn">
          Search
        </Button>
      </div>
    </form>
  );
};

export default TransactionSearch;
