import { ReactElement } from 'react';

import { Account } from '../types';

export interface RenderProps {
  accounts: Account[];
}

export interface AccountsListContainerProps {
  children: (props: RenderProps) => ReactElement;
};
