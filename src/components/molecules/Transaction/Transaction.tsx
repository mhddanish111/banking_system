import React, { useState, useEffect, useCallback } from 'react';
import { useLazyQuery } from '@apollo/client';
import moment from 'moment';
import Heading from '../../atoms/Heading';
import { GET_TRANSACTION } from '../../../constant/Query';
import Pagination from '../../atoms/Pagination';
import TransactionSearch from '../TransactionSearch';
import './Transaction.scss';

type SearchProps = {
  fromDate: string;
  toDate: string;
};
const Transaction: React.FC<any> = (props) => {
  const {
    selectedAccountNumber,
    setIsCallTransaction,
    isCallTransaction = false,
  } = props;
  const limit = 10;
  const [getTransaction] = useLazyQuery(GET_TRANSACTION);
  const [isOnPageLoad, setIsPageOnLoad] = useState<boolean>(true);
  const [offset, setOffset] = useState(1);
  const [search, setSearch] = useState({
    showAll: true,
    last10Transaction: false,
    customSearch: false,
  });
  // const [isCustomSearch, setCustomSearch] = useState<boolean>(false);
  const [transaction, setTransaction] = useState({
    count: {
      offset: 0,
      limit,
      totalCount: 10,
    },
    result: [],
  });
  const callTransaction = (page: any) => {
    setOffset(page);
    setIsPageOnLoad(true);
  };

  const handleTransaction = useCallback(
    (props: any) => {
      getTransaction({
        variables: { transactionInput: props },
        fetchPolicy: 'network-only',
      })
        .then((res) => {
          const transaction = res?.data?.transaction;
          setTransaction(transaction);
          setIsPageOnLoad(false);
          setIsCallTransaction(false);
        })
        .catch((err) => {
          setIsPageOnLoad(false);
          setIsCallTransaction(false);
        });
    },
    [getTransaction, setIsCallTransaction],
  );
  useEffect(() => {
    if ((isOnPageLoad || isCallTransaction) && selectedAccountNumber) {
      const { showAll, last10Transaction, customSearch } = search;
      const date = new Date().toISOString();
      const props = {
        accountNumber: selectedAccountNumber,
        offset: offset - 1,
        limit,
        fromDate: date,
        toDate: date,
        showAll,
        last10Transaction,
        customSearch,
      };
      handleTransaction(props);
    }
  }, [
    offset,
    selectedAccountNumber,
    isOnPageLoad,
    isCallTransaction,
    setIsPageOnLoad,
    getTransaction,
    setIsCallTransaction,
    handleTransaction,
    search,
  ]);
  const searchHandler = (data: SearchProps) => {
    const date = new Date().toISOString();
    const { showAll, last10Transaction, customSearch } = search;
    const { fromDate = date, toDate = date } = data;
    const props = {
      accountNumber: selectedAccountNumber,
      offset: offset - 1,
      limit,
      fromDate,
      toDate,
      showAll,
      last10Transaction,
      customSearch,
    };
    handleTransaction(props);
  };
  return (
    <div className="row transaction-container">
      {transaction?.result?.length > 0 && (
        <>
          <div className="col-xs-12">
            <Heading HeadingType="h3">Transaction Details</Heading>
          </div>
          <div className="col-xs-12">
            <TransactionSearch
              searchHandler={searchHandler}
              search={search}
              setSearch={setSearch}
            />
          </div>
          <div className="col-sm-12 col-xs-12 pagination">
            <Pagination
              className="pagination-bar"
              currentPage={offset}
              totalCount={transaction?.count?.totalCount}
              pageSize={limit}
              onPageChange={(page: any) => callTransaction(page)}
            />
          </div>
          <div className="col-xs-12 transaction-table-container">
            <table className="transaction-table">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Transaction Id</th>
                  <th>Transaction Date</th>
                  <th>Transaction Type</th>
                  <th>Withdrawal</th>
                  <th>Deposit</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
                {transaction.result.map((item, index) => {
                  const {
                    transactionId,
                    transactionDate,
                    transactionType,
                    withdrawalAmount,
                    depositAmount,
                    amount,
                  } = item;
                  const date = moment(transactionDate).format('DD/MM/YYYY');
                  return (
                    <tr key={transactionId}>
                      <td>{index + 1}</td>
                      <td>{transactionId}</td>
                      <td>{date}</td>
                      <td>{transactionType}</td>
                      <td>{withdrawalAmount}</td>
                      <td>{depositAmount}</td>
                      <td>{amount}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Transaction;
