import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TransactionsListContainerProps } from './types';
import { thunkFetchTransactions } from '../actions';
import { transactionsSelector } from '../selectors';

const AccountsListContainer: FC<TransactionsListContainerProps> = ({ children }) => {
  const transactions = useSelector(transactionsSelector);
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(thunkFetchTransactions());
  }, [dispatch]);

  return children({ transactions });
};

export default AccountsListContainer;
