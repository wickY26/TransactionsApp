import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AccountsListContainerProps } from './types';
import { thunkFetchAccounts } from '../actions';
import { accountsSelector } from '../selectors';

const AccountsListContainer: FC<AccountsListContainerProps> = ({ children }) => {
  const accounts = useSelector(accountsSelector);
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(thunkFetchAccounts());
  }, [dispatch]);

  return children({ accounts });
};

export default AccountsListContainer;
