import React from 'react';
import { Meta } from '@storybook/react/types-6-0';


import TransactionsList from '..';

export default {
  title: 'Transaction/TransactionsList',
  component: TransactionsList,
} as Meta;

const mockAccount = {name: 'Poyraz', surname: 'Yilmaz', id: 0};
const mockAccount2 = {name: 'Neslihan', surname: 'Yilmaz', id: 1};
const mockTransactions = [
  { from: mockAccount, to: mockAccount2, amount: 50, description: 'description', id: 0 },
  { from: mockAccount2, to: mockAccount, amount: 50, description: 'description', id: 1 },
];

export const Default = () => (
  <TransactionsList transactions={mockTransactions} />
);

Default.storyName = 'default';
