import React, { FC, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { TransactionCreateContainerProps } from './types';
import { thunkCreateTransaction } from '../actions';
import { TransactionBody } from '../types';

const TransactionCreateContainer: FC<TransactionCreateContainerProps> = ({ children }) => {
  const [redirect, setRedirect] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleOnCreateTransaction = (transaction: TransactionBody) => {
    dispatch(thunkCreateTransaction(transaction));
    setRedirect(true);
  }

  return (
    <>
      {redirect && <Redirect push to="/transactions" />}
      {children({ onCreateTransaction: handleOnCreateTransaction })}
    </>
  );
};

export default TransactionCreateContainer;
