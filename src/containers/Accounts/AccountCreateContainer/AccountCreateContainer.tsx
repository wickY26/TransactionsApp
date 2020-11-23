import React, { FC, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { AccountCreateContainerProps } from './types';
import { thunkCreateAccount } from '../actions';
import { Account } from '../types';

const AccountCreateContainer: FC<AccountCreateContainerProps> = ({ children }) => {
  const [redirect, setRedirect] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleOnCreateAccount = (account: Account) => {
    dispatch(thunkCreateAccount(account));
    setRedirect(true);
  }

  return (
    <>
      {redirect && <Redirect push to="/accounts" />}
      {children({ onCreateAccount: handleOnCreateAccount })}
    </>
  );
};

export default AccountCreateContainer;
