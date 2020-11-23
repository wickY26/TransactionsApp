import { ReactElement } from 'react';

import { Transaction } from '../types';

export interface RenderProps {
  transactions: Transaction[];
}

export interface TransactionsListContainerProps {
  children: (props: RenderProps) => ReactElement;
};
