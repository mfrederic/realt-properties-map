/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  /**
   * 8 bytes signed integer
   *
   */
  Int8: { input: any; output: any; }
};

export type Account = {
  /**  Account address  */
  address: Scalars['Bytes']['output'];
  /**  Allowances for Account  */
  allowances: Array<Allowance>;
  /**  Token balances  */
  balances: Array<AccountBalance>;
  /**  Token balances history  */
  balancesHistory: Array<AccountBalanceSnapshot>;
  /**  Equals to: <accountAddress> */
  id: Scalars['ID']['output'];
  userIds: Array<UserId>;
};


export type AccountAllowancesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Allowance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Allowance_Filter>;
};


export type AccountBalancesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountBalance_Filter>;
};


export type AccountBalancesHistoryArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountBalanceSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountBalanceSnapshot_Filter>;
};


export type AccountUserIdsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UserId_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserId_Filter>;
};

export type AccountBalance = {
  /**  Account address  */
  account: Account;
  /**  Allowances for AccountBalance  */
  allowances: Array<Allowance>;
  /**  Current account balance  */
  amount: Scalars['BigDecimal']['output'];
  /**  Block number in which the balance was last modified  */
  block: Scalars['BigInt']['output'];
  history: Array<AccountBalanceSnapshot>;
  /**  Equals to: <accountAddress>-<tokenAddress> */
  id: Scalars['ID']['output'];
  /**  Last modified timestamp in seconds  */
  modified: Scalars['BigInt']['output'];
  /**  Token address  */
  token: Token;
  /**  Hash of the last transaction that modified the balance  */
  transaction: Transaction;
};


export type AccountBalanceAllowancesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Allowance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Allowance_Filter>;
};


export type AccountBalanceHistoryArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountBalanceSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountBalanceSnapshot_Filter>;
};

export type AccountBalanceSnapshot = {
  /**  Account address  */
  account: Account;
  /**  Account balance  */
  accountBalance: AccountBalance;
  /**  Account balance  */
  amount: Scalars['BigDecimal']['output'];
  /**  Block number  */
  block: Scalars['BigInt']['output'];
  event: TransferEvent;
  /**  Equals to: <accountAddress>-<tokenAddress>-<timestamp> */
  id: Scalars['ID']['output'];
  /**  Timestamp in seconds  */
  timestamp: Scalars['BigInt']['output'];
  /**  Token addess  */
  token: Token;
  /**  Transaction hash  */
  transaction: Transaction;
};

export type AccountBalanceSnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']['input']>;
  accountBalance?: InputMaybe<Scalars['String']['input']>;
  accountBalance_?: InputMaybe<AccountBalance_Filter>;
  accountBalance_contains?: InputMaybe<Scalars['String']['input']>;
  accountBalance_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  accountBalance_ends_with?: InputMaybe<Scalars['String']['input']>;
  accountBalance_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  accountBalance_gt?: InputMaybe<Scalars['String']['input']>;
  accountBalance_gte?: InputMaybe<Scalars['String']['input']>;
  accountBalance_in?: InputMaybe<Array<Scalars['String']['input']>>;
  accountBalance_lt?: InputMaybe<Scalars['String']['input']>;
  accountBalance_lte?: InputMaybe<Scalars['String']['input']>;
  accountBalance_not?: InputMaybe<Scalars['String']['input']>;
  accountBalance_not_contains?: InputMaybe<Scalars['String']['input']>;
  accountBalance_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  accountBalance_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  accountBalance_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  accountBalance_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  accountBalance_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  accountBalance_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  accountBalance_starts_with?: InputMaybe<Scalars['String']['input']>;
  accountBalance_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  amount?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  and?: InputMaybe<Array<InputMaybe<AccountBalanceSnapshot_Filter>>>;
  block?: InputMaybe<Scalars['BigInt']['input']>;
  block_gt?: InputMaybe<Scalars['BigInt']['input']>;
  block_gte?: InputMaybe<Scalars['BigInt']['input']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  block_lt?: InputMaybe<Scalars['BigInt']['input']>;
  block_lte?: InputMaybe<Scalars['BigInt']['input']>;
  block_not?: InputMaybe<Scalars['BigInt']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  event?: InputMaybe<Scalars['String']['input']>;
  event_?: InputMaybe<TransferEvent_Filter>;
  event_contains?: InputMaybe<Scalars['String']['input']>;
  event_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  event_ends_with?: InputMaybe<Scalars['String']['input']>;
  event_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  event_gt?: InputMaybe<Scalars['String']['input']>;
  event_gte?: InputMaybe<Scalars['String']['input']>;
  event_in?: InputMaybe<Array<Scalars['String']['input']>>;
  event_lt?: InputMaybe<Scalars['String']['input']>;
  event_lte?: InputMaybe<Scalars['String']['input']>;
  event_not?: InputMaybe<Scalars['String']['input']>;
  event_not_contains?: InputMaybe<Scalars['String']['input']>;
  event_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  event_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  event_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  event_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  event_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  event_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  event_starts_with?: InputMaybe<Scalars['String']['input']>;
  event_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AccountBalanceSnapshot_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum AccountBalanceSnapshot_OrderBy {
  Account = 'account',
  AccountBalance = 'accountBalance',
  AccountBalanceAmount = 'accountBalance__amount',
  AccountBalanceBlock = 'accountBalance__block',
  AccountBalanceId = 'accountBalance__id',
  AccountBalanceModified = 'accountBalance__modified',
  AccountAddress = 'account__address',
  AccountId = 'account__id',
  Amount = 'amount',
  Block = 'block',
  Event = 'event',
  EventAmount = 'event__amount',
  EventBlock = 'event__block',
  EventDestination = 'event__destination',
  EventId = 'event__id',
  EventSender = 'event__sender',
  EventSource = 'event__source',
  EventTimestamp = 'event__timestamp',
  Id = 'id',
  Timestamp = 'timestamp',
  Token = 'token',
  TokenAddress = 'token__address',
  TokenApproveEventCount = 'token__approveEventCount',
  TokenBurnEventCount = 'token__burnEventCount',
  TokenDecimals = 'token__decimals',
  TokenEventCount = 'token__eventCount',
  TokenFullName = 'token__fullName',
  TokenId = 'token__id',
  TokenMintEventCount = 'token__mintEventCount',
  TokenSymbol = 'token__symbol',
  TokenTotalBurned = 'token__totalBurned',
  TokenTotalMinted = 'token__totalMinted',
  TokenTotalSupply = 'token__totalSupply',
  TokenTotalTransferred = 'token__totalTransferred',
  TokenTransferEventCount = 'token__transferEventCount',
  Transaction = 'transaction',
  TransactionBlock = 'transaction__block',
  TransactionCumulativeGasUsed = 'transaction__cumulativeGasUsed',
  TransactionGasLimit = 'transaction__gasLimit',
  TransactionGasPrice = 'transaction__gasPrice',
  TransactionGasUsed = 'transaction__gasUsed',
  TransactionId = 'transaction__id',
  TransactionInput = 'transaction__input',
  TransactionTimestamp = 'transaction__timestamp',
  TransactionTo = 'transaction__to',
  TransactionValue = 'transaction__value'
}

export type AccountBalance_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowances_?: InputMaybe<Allowance_Filter>;
  amount?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  and?: InputMaybe<Array<InputMaybe<AccountBalance_Filter>>>;
  block?: InputMaybe<Scalars['BigInt']['input']>;
  block_gt?: InputMaybe<Scalars['BigInt']['input']>;
  block_gte?: InputMaybe<Scalars['BigInt']['input']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  block_lt?: InputMaybe<Scalars['BigInt']['input']>;
  block_lte?: InputMaybe<Scalars['BigInt']['input']>;
  block_not?: InputMaybe<Scalars['BigInt']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  history_?: InputMaybe<AccountBalanceSnapshot_Filter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  modified?: InputMaybe<Scalars['BigInt']['input']>;
  modified_gt?: InputMaybe<Scalars['BigInt']['input']>;
  modified_gte?: InputMaybe<Scalars['BigInt']['input']>;
  modified_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  modified_lt?: InputMaybe<Scalars['BigInt']['input']>;
  modified_lte?: InputMaybe<Scalars['BigInt']['input']>;
  modified_not?: InputMaybe<Scalars['BigInt']['input']>;
  modified_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AccountBalance_Filter>>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum AccountBalance_OrderBy {
  Account = 'account',
  AccountAddress = 'account__address',
  AccountId = 'account__id',
  Allowances = 'allowances',
  Amount = 'amount',
  Block = 'block',
  History = 'history',
  Id = 'id',
  Modified = 'modified',
  Token = 'token',
  TokenAddress = 'token__address',
  TokenApproveEventCount = 'token__approveEventCount',
  TokenBurnEventCount = 'token__burnEventCount',
  TokenDecimals = 'token__decimals',
  TokenEventCount = 'token__eventCount',
  TokenFullName = 'token__fullName',
  TokenId = 'token__id',
  TokenMintEventCount = 'token__mintEventCount',
  TokenSymbol = 'token__symbol',
  TokenTotalBurned = 'token__totalBurned',
  TokenTotalMinted = 'token__totalMinted',
  TokenTotalSupply = 'token__totalSupply',
  TokenTotalTransferred = 'token__totalTransferred',
  TokenTransferEventCount = 'token__transferEventCount',
  Transaction = 'transaction',
  TransactionBlock = 'transaction__block',
  TransactionCumulativeGasUsed = 'transaction__cumulativeGasUsed',
  TransactionGasLimit = 'transaction__gasLimit',
  TransactionGasPrice = 'transaction__gasPrice',
  TransactionGasUsed = 'transaction__gasUsed',
  TransactionId = 'transaction__id',
  TransactionInput = 'transaction__input',
  TransactionTimestamp = 'transaction__timestamp',
  TransactionTo = 'transaction__to',
  TransactionValue = 'transaction__value'
}

export type Account_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']['input']>;
  address_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_lt?: InputMaybe<Scalars['Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  allowances_?: InputMaybe<Allowance_Filter>;
  and?: InputMaybe<Array<InputMaybe<Account_Filter>>>;
  balancesHistory_?: InputMaybe<AccountBalanceSnapshot_Filter>;
  balances_?: InputMaybe<AccountBalance_Filter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Account_Filter>>>;
  userIds?: InputMaybe<Array<Scalars['String']['input']>>;
  userIds_?: InputMaybe<UserId_Filter>;
  userIds_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  userIds_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  userIds_not?: InputMaybe<Array<Scalars['String']['input']>>;
  userIds_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  userIds_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
};

export enum Account_OrderBy {
  Address = 'address',
  Allowances = 'allowances',
  Balances = 'balances',
  BalancesHistory = 'balancesHistory',
  Id = 'id',
  UserIds = 'userIds'
}

export enum Aggregation_Interval {
  Day = 'day',
  Hour = 'hour'
}

export type Allowance = {
  /**  Account address  */
  account: Account;
  /**  Current allowance  */
  allowance: Scalars['BigDecimal']['output'];
  /**  Account balance  */
  balance: AccountBalance;
  /**  Equals to: <accountAddress>-<tokenAddress>-<spenderAddress> */
  id: Scalars['ID']['output'];
  /**  Spender address  */
  spender: Account;
  /**  Token address  */
  token: Token;
};

export type Allowance_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowance?: InputMaybe<Scalars['BigDecimal']['input']>;
  allowance_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  allowance_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  allowance_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  allowance_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  allowance_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  allowance_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  allowance_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Allowance_Filter>>>;
  balance?: InputMaybe<Scalars['String']['input']>;
  balance_?: InputMaybe<AccountBalance_Filter>;
  balance_contains?: InputMaybe<Scalars['String']['input']>;
  balance_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  balance_ends_with?: InputMaybe<Scalars['String']['input']>;
  balance_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  balance_gt?: InputMaybe<Scalars['String']['input']>;
  balance_gte?: InputMaybe<Scalars['String']['input']>;
  balance_in?: InputMaybe<Array<Scalars['String']['input']>>;
  balance_lt?: InputMaybe<Scalars['String']['input']>;
  balance_lte?: InputMaybe<Scalars['String']['input']>;
  balance_not?: InputMaybe<Scalars['String']['input']>;
  balance_not_contains?: InputMaybe<Scalars['String']['input']>;
  balance_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  balance_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  balance_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  balance_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  balance_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  balance_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  balance_starts_with?: InputMaybe<Scalars['String']['input']>;
  balance_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Allowance_Filter>>>;
  spender?: InputMaybe<Scalars['String']['input']>;
  spender_?: InputMaybe<Account_Filter>;
  spender_contains?: InputMaybe<Scalars['String']['input']>;
  spender_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  spender_ends_with?: InputMaybe<Scalars['String']['input']>;
  spender_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  spender_gt?: InputMaybe<Scalars['String']['input']>;
  spender_gte?: InputMaybe<Scalars['String']['input']>;
  spender_in?: InputMaybe<Array<Scalars['String']['input']>>;
  spender_lt?: InputMaybe<Scalars['String']['input']>;
  spender_lte?: InputMaybe<Scalars['String']['input']>;
  spender_not?: InputMaybe<Scalars['String']['input']>;
  spender_not_contains?: InputMaybe<Scalars['String']['input']>;
  spender_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  spender_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  spender_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  spender_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  spender_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  spender_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  spender_starts_with?: InputMaybe<Scalars['String']['input']>;
  spender_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Allowance_OrderBy {
  Account = 'account',
  AccountAddress = 'account__address',
  AccountId = 'account__id',
  Allowance = 'allowance',
  Balance = 'balance',
  BalanceAmount = 'balance__amount',
  BalanceBlock = 'balance__block',
  BalanceId = 'balance__id',
  BalanceModified = 'balance__modified',
  Id = 'id',
  Spender = 'spender',
  SpenderAddress = 'spender__address',
  SpenderId = 'spender__id',
  Token = 'token',
  TokenAddress = 'token__address',
  TokenApproveEventCount = 'token__approveEventCount',
  TokenBurnEventCount = 'token__burnEventCount',
  TokenDecimals = 'token__decimals',
  TokenEventCount = 'token__eventCount',
  TokenFullName = 'token__fullName',
  TokenId = 'token__id',
  TokenMintEventCount = 'token__mintEventCount',
  TokenSymbol = 'token__symbol',
  TokenTotalBurned = 'token__totalBurned',
  TokenTotalMinted = 'token__totalMinted',
  TokenTotalSupply = 'token__totalSupply',
  TokenTotalTransferred = 'token__totalTransferred',
  TokenTransferEventCount = 'token__transferEventCount'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type BurnEvent = TokenEvent & {
  /**  Quantity of tokens burned  */
  amount: Scalars['BigDecimal']['output'];
  /**  Block number  */
  block: Scalars['BigInt']['output'];
  /**  Address of burned account  */
  burner: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  /**  Transaction sender address  */
  sender: Scalars['Bytes']['output'];
  /**  Event timestamp  */
  timestamp: Scalars['BigInt']['output'];
  /**  Token address  */
  token: Token;
  /**  Transaction hash  */
  transaction: Transaction;
};

export type BurnEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  and?: InputMaybe<Array<InputMaybe<BurnEvent_Filter>>>;
  block?: InputMaybe<Scalars['BigInt']['input']>;
  block_gt?: InputMaybe<Scalars['BigInt']['input']>;
  block_gte?: InputMaybe<Scalars['BigInt']['input']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  block_lt?: InputMaybe<Scalars['BigInt']['input']>;
  block_lte?: InputMaybe<Scalars['BigInt']['input']>;
  block_not?: InputMaybe<Scalars['BigInt']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  burner?: InputMaybe<Scalars['Bytes']['input']>;
  burner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  burner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  burner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  burner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  burner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  burner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  burner_not?: InputMaybe<Scalars['Bytes']['input']>;
  burner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  burner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<BurnEvent_Filter>>>;
  sender?: InputMaybe<Scalars['Bytes']['input']>;
  sender_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_lt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum BurnEvent_OrderBy {
  Amount = 'amount',
  Block = 'block',
  Burner = 'burner',
  Id = 'id',
  Sender = 'sender',
  Timestamp = 'timestamp',
  Token = 'token',
  TokenAddress = 'token__address',
  TokenApproveEventCount = 'token__approveEventCount',
  TokenBurnEventCount = 'token__burnEventCount',
  TokenDecimals = 'token__decimals',
  TokenEventCount = 'token__eventCount',
  TokenFullName = 'token__fullName',
  TokenId = 'token__id',
  TokenMintEventCount = 'token__mintEventCount',
  TokenSymbol = 'token__symbol',
  TokenTotalBurned = 'token__totalBurned',
  TokenTotalMinted = 'token__totalMinted',
  TokenTotalSupply = 'token__totalSupply',
  TokenTotalTransferred = 'token__totalTransferred',
  TokenTransferEventCount = 'token__transferEventCount',
  Transaction = 'transaction',
  TransactionBlock = 'transaction__block',
  TransactionCumulativeGasUsed = 'transaction__cumulativeGasUsed',
  TransactionGasLimit = 'transaction__gasLimit',
  TransactionGasPrice = 'transaction__gasPrice',
  TransactionGasUsed = 'transaction__gasUsed',
  TransactionId = 'transaction__id',
  TransactionInput = 'transaction__input',
  TransactionTimestamp = 'transaction__timestamp',
  TransactionTo = 'transaction__to',
  TransactionValue = 'transaction__value'
}

export type MintEvent = TokenEvent & {
  /**  Quantity of tokens minted  */
  amount: Scalars['BigDecimal']['output'];
  /**  Block number  */
  block: Scalars['BigInt']['output'];
  /**  Address of destination account  */
  destination: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  /**  Transaction sender address  */
  sender: Scalars['Bytes']['output'];
  /**  Event timestamp  */
  timestamp: Scalars['BigInt']['output'];
  /**  Token address  */
  token: Token;
  /**  Transaction hash  */
  transaction: Transaction;
};

export type MintEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  and?: InputMaybe<Array<InputMaybe<MintEvent_Filter>>>;
  block?: InputMaybe<Scalars['BigInt']['input']>;
  block_gt?: InputMaybe<Scalars['BigInt']['input']>;
  block_gte?: InputMaybe<Scalars['BigInt']['input']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  block_lt?: InputMaybe<Scalars['BigInt']['input']>;
  block_lte?: InputMaybe<Scalars['BigInt']['input']>;
  block_not?: InputMaybe<Scalars['BigInt']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  destination?: InputMaybe<Scalars['Bytes']['input']>;
  destination_contains?: InputMaybe<Scalars['Bytes']['input']>;
  destination_gt?: InputMaybe<Scalars['Bytes']['input']>;
  destination_gte?: InputMaybe<Scalars['Bytes']['input']>;
  destination_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  destination_lt?: InputMaybe<Scalars['Bytes']['input']>;
  destination_lte?: InputMaybe<Scalars['Bytes']['input']>;
  destination_not?: InputMaybe<Scalars['Bytes']['input']>;
  destination_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  destination_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<MintEvent_Filter>>>;
  sender?: InputMaybe<Scalars['Bytes']['input']>;
  sender_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_lt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum MintEvent_OrderBy {
  Amount = 'amount',
  Block = 'block',
  Destination = 'destination',
  Id = 'id',
  Sender = 'sender',
  Timestamp = 'timestamp',
  Token = 'token',
  TokenAddress = 'token__address',
  TokenApproveEventCount = 'token__approveEventCount',
  TokenBurnEventCount = 'token__burnEventCount',
  TokenDecimals = 'token__decimals',
  TokenEventCount = 'token__eventCount',
  TokenFullName = 'token__fullName',
  TokenId = 'token__id',
  TokenMintEventCount = 'token__mintEventCount',
  TokenSymbol = 'token__symbol',
  TokenTotalBurned = 'token__totalBurned',
  TokenTotalMinted = 'token__totalMinted',
  TokenTotalSupply = 'token__totalSupply',
  TokenTotalTransferred = 'token__totalTransferred',
  TokenTransferEventCount = 'token__transferEventCount',
  Transaction = 'transaction',
  TransactionBlock = 'transaction__block',
  TransactionCumulativeGasUsed = 'transaction__cumulativeGasUsed',
  TransactionGasLimit = 'transaction__gasLimit',
  TransactionGasPrice = 'transaction__gasPrice',
  TransactionGasUsed = 'transaction__gasUsed',
  TransactionId = 'transaction__id',
  TransactionInput = 'transaction__input',
  TransactionTimestamp = 'transaction__timestamp',
  TransactionTo = 'transaction__to',
  TransactionValue = 'transaction__value'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accountBalance?: Maybe<AccountBalance>;
  accountBalanceSnapshot?: Maybe<AccountBalanceSnapshot>;
  accountBalanceSnapshots: Array<AccountBalanceSnapshot>;
  accountBalances: Array<AccountBalance>;
  accounts: Array<Account>;
  allowance?: Maybe<Allowance>;
  allowances: Array<Allowance>;
  burnEvent?: Maybe<BurnEvent>;
  burnEvents: Array<BurnEvent>;
  mintEvent?: Maybe<MintEvent>;
  mintEvents: Array<MintEvent>;
  token?: Maybe<Token>;
  tokenEvent?: Maybe<TokenEvent>;
  tokenEvents: Array<TokenEvent>;
  tokens: Array<Token>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  transferEvent?: Maybe<TransferEvent>;
  transferEvents: Array<TransferEvent>;
  trustedIntermediaries: Array<TrustedIntermediary>;
  trustedIntermediary?: Maybe<TrustedIntermediary>;
  userId?: Maybe<UserId>;
  userIds: Array<UserId>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountBalanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountBalanceSnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountBalanceSnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountBalanceSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccountBalanceSnapshot_Filter>;
};


export type QueryAccountBalancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccountBalance_Filter>;
};


export type QueryAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
};


export type QueryAllowanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAllowancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Allowance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Allowance_Filter>;
};


export type QueryBurnEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBurnEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BurnEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BurnEvent_Filter>;
};


export type QueryMintEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMintEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MintEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MintEvent_Filter>;
};


export type QueryTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenEvent_Filter>;
};


export type QueryTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};


export type QueryTransactionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTransactionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transaction_Filter>;
};


export type QueryTransferEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTransferEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransferEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TransferEvent_Filter>;
};


export type QueryTrustedIntermediariesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TrustedIntermediary_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TrustedIntermediary_Filter>;
};


export type QueryTrustedIntermediaryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUserIdArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUserIdsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UserId_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserId_Filter>;
};

export type Subscription = {
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accountBalance?: Maybe<AccountBalance>;
  accountBalanceSnapshot?: Maybe<AccountBalanceSnapshot>;
  accountBalanceSnapshots: Array<AccountBalanceSnapshot>;
  accountBalances: Array<AccountBalance>;
  accounts: Array<Account>;
  allowance?: Maybe<Allowance>;
  allowances: Array<Allowance>;
  burnEvent?: Maybe<BurnEvent>;
  burnEvents: Array<BurnEvent>;
  mintEvent?: Maybe<MintEvent>;
  mintEvents: Array<MintEvent>;
  token?: Maybe<Token>;
  tokenEvent?: Maybe<TokenEvent>;
  tokenEvents: Array<TokenEvent>;
  tokens: Array<Token>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  transferEvent?: Maybe<TransferEvent>;
  transferEvents: Array<TransferEvent>;
  trustedIntermediaries: Array<TrustedIntermediary>;
  trustedIntermediary?: Maybe<TrustedIntermediary>;
  userId?: Maybe<UserId>;
  userIds: Array<UserId>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccountBalanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccountBalanceSnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccountBalanceSnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountBalanceSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccountBalanceSnapshot_Filter>;
};


export type SubscriptionAccountBalancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccountBalance_Filter>;
};


export type SubscriptionAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
};


export type SubscriptionAllowanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAllowancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Allowance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Allowance_Filter>;
};


export type SubscriptionBurnEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBurnEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BurnEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BurnEvent_Filter>;
};


export type SubscriptionMintEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMintEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MintEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MintEvent_Filter>;
};


export type SubscriptionTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenEvent_Filter>;
};


export type SubscriptionTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};


export type SubscriptionTransactionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTransactionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transaction_Filter>;
};


export type SubscriptionTransferEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTransferEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransferEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TransferEvent_Filter>;
};


export type SubscriptionTrustedIntermediariesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TrustedIntermediary_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TrustedIntermediary_Filter>;
};


export type SubscriptionTrustedIntermediaryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUserIdArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUserIdsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UserId_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserId_Filter>;
};

export type Token = {
  /**  Token address  */
  address: Scalars['Bytes']['output'];
  /**  Total number of approval events  */
  approveEventCount: Scalars['BigInt']['output'];
  /**  List of approval  */
  approves: Array<Allowance>;
  /**  Total number of burn events  */
  burnEventCount: Scalars['BigInt']['output'];
  /**  List of burn events  */
  burnEvents: Array<BurnEvent>;
  /**  Number of decimals the token uses  */
  decimals: Scalars['Int']['output'];
  /**  Total number of events (all types) */
  eventCount: Scalars['BigInt']['output'];
  /**  Human-readable fullname of the token  */
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /**  Total number of mint events  */
  mintEventCount: Scalars['BigInt']['output'];
  /**  List of mint events  */
  mintEvents: Array<MintEvent>;
  /**  Trusted intermediaries order  */
  order: Array<Scalars['String']['output']>;
  /**  Symbol of the token  */
  symbol: Scalars['String']['output'];
  /**  Total token burned  */
  totalBurned: Scalars['BigDecimal']['output'];
  /**  Total token minted  */
  totalMinted: Scalars['BigDecimal']['output'];
  /**  Total token supply  */
  totalSupply: Scalars['BigDecimal']['output'];
  /**  Total token transferred  */
  totalTransferred: Scalars['BigDecimal']['output'];
  /**  List of transactions  */
  transactions: Array<Transaction>;
  /**  Total number of transfer events  */
  transferEventCount: Scalars['BigInt']['output'];
  /**  List of token events  */
  transferEvents: Array<TransferEvent>;
  /**  Trusted intermediaries list  */
  trustedIntermediaries: Array<TrustedIntermediary>;
};


export type TokenApprovesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Allowance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Allowance_Filter>;
};


export type TokenBurnEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BurnEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BurnEvent_Filter>;
};


export type TokenMintEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MintEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MintEvent_Filter>;
};


export type TokenTransactionsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Transaction_Filter>;
};


export type TokenTransferEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransferEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TransferEvent_Filter>;
};


export type TokenTrustedIntermediariesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TrustedIntermediary_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TrustedIntermediary_Filter>;
};

export type TokenEvent = {
  /**  Quantity of tokens  */
  amount: Scalars['BigDecimal']['output'];
  /**  Block number  */
  block: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  /**  Transaction sender address  */
  sender: Scalars['Bytes']['output'];
  /**  Event timestamp  */
  timestamp: Scalars['BigInt']['output'];
  /**  Token address  */
  token: Token;
  /**  Transaction hash  */
  transaction: Transaction;
};

export type TokenEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  and?: InputMaybe<Array<InputMaybe<TokenEvent_Filter>>>;
  block?: InputMaybe<Scalars['BigInt']['input']>;
  block_gt?: InputMaybe<Scalars['BigInt']['input']>;
  block_gte?: InputMaybe<Scalars['BigInt']['input']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  block_lt?: InputMaybe<Scalars['BigInt']['input']>;
  block_lte?: InputMaybe<Scalars['BigInt']['input']>;
  block_not?: InputMaybe<Scalars['BigInt']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<TokenEvent_Filter>>>;
  sender?: InputMaybe<Scalars['Bytes']['input']>;
  sender_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_lt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum TokenEvent_OrderBy {
  Amount = 'amount',
  Block = 'block',
  Id = 'id',
  Sender = 'sender',
  Timestamp = 'timestamp',
  Token = 'token',
  TokenAddress = 'token__address',
  TokenApproveEventCount = 'token__approveEventCount',
  TokenBurnEventCount = 'token__burnEventCount',
  TokenDecimals = 'token__decimals',
  TokenEventCount = 'token__eventCount',
  TokenFullName = 'token__fullName',
  TokenId = 'token__id',
  TokenMintEventCount = 'token__mintEventCount',
  TokenSymbol = 'token__symbol',
  TokenTotalBurned = 'token__totalBurned',
  TokenTotalMinted = 'token__totalMinted',
  TokenTotalSupply = 'token__totalSupply',
  TokenTotalTransferred = 'token__totalTransferred',
  TokenTransferEventCount = 'token__transferEventCount',
  Transaction = 'transaction',
  TransactionBlock = 'transaction__block',
  TransactionCumulativeGasUsed = 'transaction__cumulativeGasUsed',
  TransactionGasLimit = 'transaction__gasLimit',
  TransactionGasPrice = 'transaction__gasPrice',
  TransactionGasUsed = 'transaction__gasUsed',
  TransactionId = 'transaction__id',
  TransactionInput = 'transaction__input',
  TransactionTimestamp = 'transaction__timestamp',
  TransactionTo = 'transaction__to',
  TransactionValue = 'transaction__value'
}

export type Token_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']['input']>;
  address_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_lt?: InputMaybe<Scalars['Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Token_Filter>>>;
  approveEventCount?: InputMaybe<Scalars['BigInt']['input']>;
  approveEventCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  approveEventCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  approveEventCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  approveEventCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  approveEventCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  approveEventCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  approveEventCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  approves_?: InputMaybe<Allowance_Filter>;
  burnEventCount?: InputMaybe<Scalars['BigInt']['input']>;
  burnEventCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  burnEventCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  burnEventCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  burnEventCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  burnEventCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  burnEventCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  burnEventCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  burnEvents_?: InputMaybe<BurnEvent_Filter>;
  decimals?: InputMaybe<Scalars['Int']['input']>;
  decimals_gt?: InputMaybe<Scalars['Int']['input']>;
  decimals_gte?: InputMaybe<Scalars['Int']['input']>;
  decimals_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  decimals_lt?: InputMaybe<Scalars['Int']['input']>;
  decimals_lte?: InputMaybe<Scalars['Int']['input']>;
  decimals_not?: InputMaybe<Scalars['Int']['input']>;
  decimals_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  eventCount?: InputMaybe<Scalars['BigInt']['input']>;
  eventCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  eventCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  eventCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eventCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  eventCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  eventCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  eventCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  fullName_contains?: InputMaybe<Scalars['String']['input']>;
  fullName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  fullName_ends_with?: InputMaybe<Scalars['String']['input']>;
  fullName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fullName_gt?: InputMaybe<Scalars['String']['input']>;
  fullName_gte?: InputMaybe<Scalars['String']['input']>;
  fullName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  fullName_lt?: InputMaybe<Scalars['String']['input']>;
  fullName_lte?: InputMaybe<Scalars['String']['input']>;
  fullName_not?: InputMaybe<Scalars['String']['input']>;
  fullName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fullName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  fullName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  fullName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fullName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  fullName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  fullName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fullName_starts_with?: InputMaybe<Scalars['String']['input']>;
  fullName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  mintEventCount?: InputMaybe<Scalars['BigInt']['input']>;
  mintEventCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  mintEventCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  mintEventCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  mintEventCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  mintEventCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  mintEventCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  mintEventCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  mintEvents_?: InputMaybe<MintEvent_Filter>;
  or?: InputMaybe<Array<InputMaybe<Token_Filter>>>;
  order?: InputMaybe<Array<Scalars['String']['input']>>;
  order_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  order_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  order_not?: InputMaybe<Array<Scalars['String']['input']>>;
  order_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  order_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  totalBurned?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBurned_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBurned_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBurned_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalBurned_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBurned_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBurned_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBurned_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalMinted?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalMinted_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalMinted_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalMinted_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalMinted_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalMinted_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalMinted_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalMinted_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSupply?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSupply_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalTransferred?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalTransferred_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalTransferred_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalTransferred_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalTransferred_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalTransferred_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalTransferred_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalTransferred_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  transactions?: InputMaybe<Array<Scalars['String']['input']>>;
  transactions_?: InputMaybe<Transaction_Filter>;
  transactions_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  transactions_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  transactions_not?: InputMaybe<Array<Scalars['String']['input']>>;
  transactions_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  transactions_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  transferEventCount?: InputMaybe<Scalars['BigInt']['input']>;
  transferEventCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  transferEventCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  transferEventCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transferEventCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  transferEventCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  transferEventCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  transferEventCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transferEvents_?: InputMaybe<TransferEvent_Filter>;
  trustedIntermediaries?: InputMaybe<Array<Scalars['String']['input']>>;
  trustedIntermediaries_?: InputMaybe<TrustedIntermediary_Filter>;
  trustedIntermediaries_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  trustedIntermediaries_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  trustedIntermediaries_not?: InputMaybe<Array<Scalars['String']['input']>>;
  trustedIntermediaries_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  trustedIntermediaries_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
};

export enum Token_OrderBy {
  Address = 'address',
  ApproveEventCount = 'approveEventCount',
  Approves = 'approves',
  BurnEventCount = 'burnEventCount',
  BurnEvents = 'burnEvents',
  Decimals = 'decimals',
  EventCount = 'eventCount',
  FullName = 'fullName',
  Id = 'id',
  MintEventCount = 'mintEventCount',
  MintEvents = 'mintEvents',
  Order = 'order',
  Symbol = 'symbol',
  TotalBurned = 'totalBurned',
  TotalMinted = 'totalMinted',
  TotalSupply = 'totalSupply',
  TotalTransferred = 'totalTransferred',
  Transactions = 'transactions',
  TransferEventCount = 'transferEventCount',
  TransferEvents = 'transferEvents',
  TrustedIntermediaries = 'trustedIntermediaries'
}

export type Transaction = {
  /**  Block number  */
  block: Scalars['BigInt']['output'];
  /**  Transaction cumulative gas used  */
  cumulativeGasUsed?: Maybe<Scalars['BigInt']['output']>;
  /**  Transaction gas limit  */
  gasLimit: Scalars['BigInt']['output'];
  /**  Transaction gas price  */
  gasPrice: Scalars['BigInt']['output'];
  /**  Transaction gas used  */
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  /**  Transaction hash  */
  id: Scalars['ID']['output'];
  /**  Input  */
  input: Scalars['Bytes']['output'];
  /**  Event timestamp  */
  timestamp: Scalars['BigInt']['output'];
  /**  Interacted With (To)   */
  to?: Maybe<Scalars['Bytes']['output']>;
  /**  List of transfer events  */
  transferEvents: Array<TransferEvent>;
  /**  Value  */
  value: Scalars['BigInt']['output'];
};


export type TransactionTransferEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransferEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TransferEvent_Filter>;
};

export type Transaction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Transaction_Filter>>>;
  block?: InputMaybe<Scalars['BigInt']['input']>;
  block_gt?: InputMaybe<Scalars['BigInt']['input']>;
  block_gte?: InputMaybe<Scalars['BigInt']['input']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  block_lt?: InputMaybe<Scalars['BigInt']['input']>;
  block_lte?: InputMaybe<Scalars['BigInt']['input']>;
  block_not?: InputMaybe<Scalars['BigInt']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeGasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeGasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeGasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeGasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeGasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeGasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeGasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeGasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasLimit?: InputMaybe<Scalars['BigInt']['input']>;
  gasLimit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasLimit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasLimit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasLimit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasLimit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasLimit_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  input?: InputMaybe<Scalars['Bytes']['input']>;
  input_contains?: InputMaybe<Scalars['Bytes']['input']>;
  input_gt?: InputMaybe<Scalars['Bytes']['input']>;
  input_gte?: InputMaybe<Scalars['Bytes']['input']>;
  input_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  input_lt?: InputMaybe<Scalars['Bytes']['input']>;
  input_lte?: InputMaybe<Scalars['Bytes']['input']>;
  input_not?: InputMaybe<Scalars['Bytes']['input']>;
  input_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  input_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Transaction_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  to?: InputMaybe<Scalars['Bytes']['input']>;
  to_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_gt?: InputMaybe<Scalars['Bytes']['input']>;
  to_gte?: InputMaybe<Scalars['Bytes']['input']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_lt?: InputMaybe<Scalars['Bytes']['input']>;
  to_lte?: InputMaybe<Scalars['Bytes']['input']>;
  to_not?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transferEvents_?: InputMaybe<TransferEvent_Filter>;
  value?: InputMaybe<Scalars['BigInt']['input']>;
  value_gt?: InputMaybe<Scalars['BigInt']['input']>;
  value_gte?: InputMaybe<Scalars['BigInt']['input']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  value_lt?: InputMaybe<Scalars['BigInt']['input']>;
  value_lte?: InputMaybe<Scalars['BigInt']['input']>;
  value_not?: InputMaybe<Scalars['BigInt']['input']>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Transaction_OrderBy {
  Block = 'block',
  CumulativeGasUsed = 'cumulativeGasUsed',
  GasLimit = 'gasLimit',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Id = 'id',
  Input = 'input',
  Timestamp = 'timestamp',
  To = 'to',
  TransferEvents = 'transferEvents',
  Value = 'value'
}

export type TransferEvent = TokenEvent & {
  /**  Quantity of tokens transferred  */
  amount: Scalars['BigDecimal']['output'];
  /**  Block number  */
  block: Scalars['BigInt']['output'];
  /**  Address of destination account  */
  destination: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  /**  Transaction sender address  */
  sender: Scalars['Bytes']['output'];
  /**  Address of source account  */
  source: Scalars['Bytes']['output'];
  /**  Event timestamp  */
  timestamp: Scalars['BigInt']['output'];
  /**  Token address  */
  token: Token;
  /**  Transaction hash  */
  transaction: Transaction;
};

export type TransferEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  and?: InputMaybe<Array<InputMaybe<TransferEvent_Filter>>>;
  block?: InputMaybe<Scalars['BigInt']['input']>;
  block_gt?: InputMaybe<Scalars['BigInt']['input']>;
  block_gte?: InputMaybe<Scalars['BigInt']['input']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  block_lt?: InputMaybe<Scalars['BigInt']['input']>;
  block_lte?: InputMaybe<Scalars['BigInt']['input']>;
  block_not?: InputMaybe<Scalars['BigInt']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  destination?: InputMaybe<Scalars['Bytes']['input']>;
  destination_contains?: InputMaybe<Scalars['Bytes']['input']>;
  destination_gt?: InputMaybe<Scalars['Bytes']['input']>;
  destination_gte?: InputMaybe<Scalars['Bytes']['input']>;
  destination_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  destination_lt?: InputMaybe<Scalars['Bytes']['input']>;
  destination_lte?: InputMaybe<Scalars['Bytes']['input']>;
  destination_not?: InputMaybe<Scalars['Bytes']['input']>;
  destination_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  destination_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<TransferEvent_Filter>>>;
  sender?: InputMaybe<Scalars['Bytes']['input']>;
  sender_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_lt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  source?: InputMaybe<Scalars['Bytes']['input']>;
  source_contains?: InputMaybe<Scalars['Bytes']['input']>;
  source_gt?: InputMaybe<Scalars['Bytes']['input']>;
  source_gte?: InputMaybe<Scalars['Bytes']['input']>;
  source_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  source_lt?: InputMaybe<Scalars['Bytes']['input']>;
  source_lte?: InputMaybe<Scalars['Bytes']['input']>;
  source_not?: InputMaybe<Scalars['Bytes']['input']>;
  source_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  source_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum TransferEvent_OrderBy {
  Amount = 'amount',
  Block = 'block',
  Destination = 'destination',
  Id = 'id',
  Sender = 'sender',
  Source = 'source',
  Timestamp = 'timestamp',
  Token = 'token',
  TokenAddress = 'token__address',
  TokenApproveEventCount = 'token__approveEventCount',
  TokenBurnEventCount = 'token__burnEventCount',
  TokenDecimals = 'token__decimals',
  TokenEventCount = 'token__eventCount',
  TokenFullName = 'token__fullName',
  TokenId = 'token__id',
  TokenMintEventCount = 'token__mintEventCount',
  TokenSymbol = 'token__symbol',
  TokenTotalBurned = 'token__totalBurned',
  TokenTotalMinted = 'token__totalMinted',
  TokenTotalSupply = 'token__totalSupply',
  TokenTotalTransferred = 'token__totalTransferred',
  TokenTransferEventCount = 'token__transferEventCount',
  Transaction = 'transaction',
  TransactionBlock = 'transaction__block',
  TransactionCumulativeGasUsed = 'transaction__cumulativeGasUsed',
  TransactionGasLimit = 'transaction__gasLimit',
  TransactionGasPrice = 'transaction__gasPrice',
  TransactionGasUsed = 'transaction__gasUsed',
  TransactionId = 'transaction__id',
  TransactionInput = 'transaction__input',
  TransactionTimestamp = 'transaction__timestamp',
  TransactionTo = 'transaction__to',
  TransactionValue = 'transaction__value'
}

export type TrustedIntermediary = {
  /**  trusted intermedidary address  */
  address: Scalars['Bytes']['output'];
  /**  Equals to: <trustedAddress> */
  id: Scalars['ID']['output'];
  /**  weight  */
  weight: Scalars['BigInt']['output'];
};

export type TrustedIntermediary_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']['input']>;
  address_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_lt?: InputMaybe<Scalars['Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<TrustedIntermediary_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<TrustedIntermediary_Filter>>>;
  weight?: InputMaybe<Scalars['BigInt']['input']>;
  weight_gt?: InputMaybe<Scalars['BigInt']['input']>;
  weight_gte?: InputMaybe<Scalars['BigInt']['input']>;
  weight_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weight_lt?: InputMaybe<Scalars['BigInt']['input']>;
  weight_lte?: InputMaybe<Scalars['BigInt']['input']>;
  weight_not?: InputMaybe<Scalars['BigInt']['input']>;
  weight_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum TrustedIntermediary_OrderBy {
  Address = 'address',
  Id = 'id',
  Weight = 'weight'
}

export type UserId = {
  /**  Compliance registry attributeKeys  */
  attributeKeys: Array<Scalars['BigInt']['output']>;
  /**  Compliance registry attributeValues  */
  attributeValues: Array<Scalars['BigInt']['output']>;
  /**  Last block update  */
  block: Scalars['BigInt']['output'];
  /**  Equals to: <trustedAddress-userId> */
  id: Scalars['ID']['output'];
  /**  Last timestamp update  */
  timestamp: Scalars['BigInt']['output'];
  /**  Trusted intermediary  */
  trustedIntermediary: TrustedIntermediary;
  /**  Compliance registry userId  */
  userId: Scalars['BigInt']['output'];
};

export type UserId_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UserId_Filter>>>;
  attributeKeys?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  attributeKeys_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  attributeKeys_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  attributeKeys_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  attributeKeys_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  attributeKeys_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  attributeValues?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  attributeValues_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  attributeValues_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  attributeValues_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  attributeValues_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  attributeValues_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  block?: InputMaybe<Scalars['BigInt']['input']>;
  block_gt?: InputMaybe<Scalars['BigInt']['input']>;
  block_gte?: InputMaybe<Scalars['BigInt']['input']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  block_lt?: InputMaybe<Scalars['BigInt']['input']>;
  block_lte?: InputMaybe<Scalars['BigInt']['input']>;
  block_not?: InputMaybe<Scalars['BigInt']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<UserId_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  trustedIntermediary?: InputMaybe<Scalars['String']['input']>;
  trustedIntermediary_?: InputMaybe<TrustedIntermediary_Filter>;
  trustedIntermediary_contains?: InputMaybe<Scalars['String']['input']>;
  trustedIntermediary_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  trustedIntermediary_ends_with?: InputMaybe<Scalars['String']['input']>;
  trustedIntermediary_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  trustedIntermediary_gt?: InputMaybe<Scalars['String']['input']>;
  trustedIntermediary_gte?: InputMaybe<Scalars['String']['input']>;
  trustedIntermediary_in?: InputMaybe<Array<Scalars['String']['input']>>;
  trustedIntermediary_lt?: InputMaybe<Scalars['String']['input']>;
  trustedIntermediary_lte?: InputMaybe<Scalars['String']['input']>;
  trustedIntermediary_not?: InputMaybe<Scalars['String']['input']>;
  trustedIntermediary_not_contains?: InputMaybe<Scalars['String']['input']>;
  trustedIntermediary_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  trustedIntermediary_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  trustedIntermediary_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  trustedIntermediary_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  trustedIntermediary_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  trustedIntermediary_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  trustedIntermediary_starts_with?: InputMaybe<Scalars['String']['input']>;
  trustedIntermediary_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['BigInt']['input']>;
  userId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  userId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  userId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  userId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  userId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  userId_not?: InputMaybe<Scalars['BigInt']['input']>;
  userId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum UserId_OrderBy {
  AttributeKeys = 'attributeKeys',
  AttributeValues = 'attributeValues',
  Block = 'block',
  Id = 'id',
  Timestamp = 'timestamp',
  TrustedIntermediary = 'trustedIntermediary',
  TrustedIntermediaryAddress = 'trustedIntermediary__address',
  TrustedIntermediaryId = 'trustedIntermediary__id',
  TrustedIntermediaryWeight = 'trustedIntermediary__weight',
  UserId = 'userId'
}

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']['output']>;
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type RealTokenQueryVariables = Exact<{
  addressList?: InputMaybe<Array<Scalars['Bytes']['input']> | Scalars['Bytes']['input']>;
}>;


export type RealTokenQuery = { __typename: 'Query', accounts: Array<{ __typename: 'Account', address: any, balances: Array<{ __typename: 'AccountBalance', amount: any, token: { __typename: 'Token', address: any } }> }> };


export const RealTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RealToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addressList"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Bytes"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accounts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"address_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addressList"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"balances"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"amount_gt"},"value":{"kind":"StringValue","value":"0","block":false}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"amount"}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"desc"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}}]}}]} as unknown as DocumentNode<RealTokenQuery, RealTokenQueryVariables>;