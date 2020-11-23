import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';


import AccountCreateForm from '..';

export default {
  title: 'Account/AccountCreateForm',
  component: AccountCreateForm,
} as Meta;

export const Default = () => (
  <AccountCreateForm onCreateAccount={action('Button got clicked')} />
);

Default.storyName = 'default';
