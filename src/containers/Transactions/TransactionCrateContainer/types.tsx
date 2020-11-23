import { ReactElement } from 'react';

import { TransactionBody } from '../types';

export interface RenderProps {
  onCreateTransaction: (data: TransactionBody) => void;
}

export interface TransactionCreateContainerProps {
  children: (props: RenderProps) => ReactElement;
};
