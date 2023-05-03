import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation CreateUser($userInput: UserInput) {
    createUser(userInput: $userInput) {
      firstName
      lastName
      message
    }
  }
`;

export const CHANGE_PASSWORD = gql`
  mutation ChangePassword($changePasswordInput: ChangePasswordInput) {
    changePassword(changePasswordInput: $changePasswordInput) {
      message
      success
      data {
        firstName
      }
    }
  }
`;

export const OPEN_ACCOUNT = gql`
  mutation CreateAccount($accountInput: AccountInput) {
    createAccount(accountInput: $accountInput) {
      _id
      accountNumber
      amount
      accountType
      categoryName
      limit
      minAmount
      maxAmount
      accountTypeId
      categoryId
      userId
      message
      type
      debitCardNumber
      debitCardCSVNumber
      expiryYear
      expiryMonth
    }
  }
`;

export const DEPOSIT = gql`
  mutation Deposit($depositInput: DepositInput) {
    deposit(depositInput: $depositInput) {
      transactionResult {
        _id
      }
      accounts {
        _id
        type
        accountType
        categoryName
        accountNumber
        amount
        minAmount
        maxAmount
        limit
        charge
        debitCardNumber
        debitCardCSVNumber
        expiryYear
        expiryMonth
        users {
          _id
          firstName
          lastName
        }
      }
    }
  }
`;

export const WITHDRAWAL = gql`
  mutation Withdrawal($withdrawalInput: WithdrawalInput) {
    withdrawal(withdrawalInput: $withdrawalInput) {
      transactionResult {
        _id
      }
      accounts {
        _id
        type
        accountType
        categoryName
        accountNumber
        amount
        minAmount
        maxAmount
        limit
        charge
        debitCardNumber
        debitCardCSVNumber
        expiryYear
        expiryMonth
        users {
          _id
          firstName
          lastName
        }
      }
    }
  }
`;
