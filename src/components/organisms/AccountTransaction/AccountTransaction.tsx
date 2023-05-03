import React, { useEffect, useState, SyntheticEvent } from 'react';
import { get, isEmpty, find } from 'lodash';
import SelectDropdown from '../../atoms/SelectDropdown';
import RadioButton from '../../atoms/RadioButton';
import GetContext from '../../../context/GetContext';
import AccountDetails from '../AccountDetails';
import EmptyDashboard from '../EmptyDashboard';
import AmountTransfer from '../../molecules/AmountTransfer';
import AmountWithDrawl from '../../molecules/AmountWithDrawl';
import Transaction from '../../molecules/Transaction';
import { accountDropdownList } from '../../../utils';
import './AccountTransaction.scss';

type transactionTypeProps = {
  transactionType: string;
};

const AccountTransaction: React.FC<any> = (props: transactionTypeProps) => {
  const [transactionStatus, setTransactionStatus] = useState<boolean>(true);
  const [selectedAccount, setSelectedAccount] = useState<any>({});
  const [accountDropdown, setAccountDropdown] = useState<any>();
  const [isCallTransaction, setIsCallTransaction] = useState<Boolean>(false);
  const { state }: any = GetContext();
  const { transactionType = 'Accounts' } = props;
  const { accounts, cards } = state;
  const accountType = transactionType === 'Cards' ? cards : accounts;
  useEffect(() => {
    if (!isEmpty(accountType)) {
      const account = get(accountType, ['0'], {});
      const list = accountDropdownList(accountType);
      setAccountDropdown(list);
      setSelectedAccount(account);
    }
  }, [accounts, cards, accountType]);

  const handleSelectDropdown = (e: any) => {
    e.preventDefault();
    const { value } = e.target;
    const account = find(accountType, (item) => item._id === value);
    setSelectedAccount(account);
    setIsCallTransaction(true);
  };

  const handlerRadioButton = (value: string) => {
    if (value === 'transfer') {
      return setTransactionStatus(true);
    }
    return setTransactionStatus(false);
  };
  return (
    <>
      {isEmpty(accountType) && <EmptyDashboard />}
      {!isEmpty(accountType) && (
        <div className="row account-container">
          {!isEmpty(accountDropdown) && (
            <div className="col-sm-4 col-xs-12 select-account-dropdown">
              <SelectDropdown
                id="account-dropdown"
                name="account-dropdown"
                label="Select Account"
                options={accountDropdown}
                onChange={(e: SyntheticEvent) => handleSelectDropdown(e)}
              />
            </div>
          )}
          <div className="col-xs-12 account-details-container">
            <div className="col-sm-6 col-xs-12">
              <AccountDetails accountDetails={selectedAccount} />
            </div>
            <div className="col-sm-6 col-xs-12 transaction-main-section">
              <div className="transaction-handler">
                <RadioButton
                  id="transfer"
                  name="transfer"
                  value="transfer"
                  checked={transactionStatus}
                  onSelect={handlerRadioButton}
                >
                  Transfer Amount
                </RadioButton>
                <RadioButton
                  id="withdraw"
                  name="withdraw"
                  value="withdraw"
                  checked={!transactionStatus}
                  onSelect={handlerRadioButton}
                >
                  Withdraw Amount
                </RadioButton>
              </div>
              {transactionStatus && (
                <AmountTransfer
                  state={state}
                  type={transactionType}
                  selectedId={selectedAccount._id}
                  defaultAccountNumber={selectedAccount.accountNumber}
                  setIsCallTransaction={setIsCallTransaction}
                />
              )}
              {!transactionStatus && (
                <AmountWithDrawl
                  amount={selectedAccount?.amount}
                  type={transactionType}
                  defaultAccountNumber={selectedAccount.accountNumber}
                  setIsCallTransaction={setIsCallTransaction}
                />
              )}
            </div>
          </div>

          <div className="col-xs-12 transaction-section">
            <Transaction
              selectedAccountNumber={selectedAccount.accountNumber}
              isCallTransaction={isCallTransaction}
              setIsCallTransaction={setIsCallTransaction}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AccountTransaction;
