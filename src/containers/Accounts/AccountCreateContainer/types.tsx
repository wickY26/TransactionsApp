import { ReactElement } from 'react';

import { Account } from '../types';

export interface RenderProps {
  onCreateAccount: (data: Account) => void;
}

export interface AccountCreateContainerProps {
  children: (props: RenderProps) => ReactElement;
};
