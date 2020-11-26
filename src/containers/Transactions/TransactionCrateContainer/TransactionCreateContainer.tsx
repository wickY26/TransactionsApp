import React, { FC, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { TransactionCreateContainerProps } from './types';
import { thunkCreateTransaction } from '../actions';
import { TransactionBody } from '../types';
import { thunkFetchAccounts } from '../../Accounts/actions';
import { accountsSelector } from '../selectors';

const TransactionCreateContainer: FC<TransactionCreateContainerProps> = ({ children }) => {
  const accounts = useSelector(accountsSelector);
  const [redirect, setRedirect] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkFetchAccounts());
  }, [dispatch]);

  const handleOnCreateTransaction = (transaction: TransactionBody) => {
    dispatch(thunkCreateTransaction(transaction));
    setRedirect(true);
  }

  return (
    <>
      {redirect && <Redirect push to="/transactions" />}
      {children({ onCreateTransaction: handleOnCreateTransaction, accounts })}
    </>
  );
};

export default TransactionCreateContainer;
