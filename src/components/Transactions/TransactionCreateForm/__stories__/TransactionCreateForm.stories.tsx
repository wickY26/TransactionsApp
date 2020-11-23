import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';


import TransactionCreateForm from '..';

export default {
  title: 'Transaction/TransactionCreateForm',
  component: TransactionCreateForm,
} as Meta;

export const Default = () => (
  <TransactionCreateForm onCreateTransaction={action('Button got clicked')} />
);

Default.storyName = 'default';
