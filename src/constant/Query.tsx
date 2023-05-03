import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  query Login($logInInput: LogInInput) {
    login(logInInput: $logInInput) {
      firstName
      lastName
      userId
      token
      isValid
      message
      userType
    }
  }
`;

export const USER_DETAILS = gql`
  query UserDetails {
    userDetails {
      _id
      firstName
      lastName
      email
      mobile
      occupation
      income
      aadhaarNumber
      panNumber
      govtId
      govtIdNumber
      address
      city
      state
      postalCode
      isActive
      message
    }
  }
`;

export const GET_ACCOUNT_TYPES = gql`
  query AccountTypes {
    accountType {
      _id
      name
      type
      isActive
      category {
        _id
        name
        benefit
        isActive
        minAmount
        maxAmount
        limit
        charge
      }
    }
  }
`;

export const GET_ACCOUNTS = gql`
  query Accounts {
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
`;

export const GET_ACCOUNT_WITH_TYPE = gql`
  query AccountWithType($accountWithTypeInput: AccountWithTypeInput) {
    accountWithType(accountWithTypeInput: $accountWithTypeInput) {
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
        aadhaarNumber
        panNumber
      }
    }
  }
`;

export const GET_TRANSACTION = gql`
  query Transaction($transactionInput: TransactionInput) {
    transaction(transactionInput: $transactionInput) {
      count {
        offset
        limit
        totalCount
      }
      result {
        _id
        transactionId
        accountNumber
        amount
        withdrawalAmount
        depositAmount
        transactionDate
        accountType
        categoryName
        transactionType
      }
    }
  }
`;
