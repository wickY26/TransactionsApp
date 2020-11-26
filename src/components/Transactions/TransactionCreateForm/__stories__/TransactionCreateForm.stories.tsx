import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import TransactionCreateForm from '..';

export default {
  title: 'Transaction/TransactionCreateForm',
  component: TransactionCreateForm,
} as Meta;

const mockAccount = {name: 'Poyraz', surname: 'Yilmaz', id: 0};
const mockAccount2 = {name: 'Neslihan', surname: 'Yilmaz', id: 0};
const mockAccounts = [mockAccount, mockAccount2];

export const Default = () => (
  <TransactionCreateForm onCreateTransaction={action('Button got clicked')}  accounts={mockAccounts} />
);

Default.storyName = 'default';
