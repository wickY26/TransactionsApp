import { ReactElement } from 'react';

import { TransactionBody } from '../types';
import { Account } from '../../Accounts/types';

export interface RenderProps {
  onCreateTransaction: (data: TransactionBody) => void;
  accounts: Account[];
}

export interface TransactionCreateContainerProps {
  children: (props: RenderProps) => ReactElement;
};
