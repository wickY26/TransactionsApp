import React from 'react';
import { Meta } from '@storybook/react/types-6-0';


import AccountsList from '..';

export default {
  title: 'Account/AccountsList',
  component: AccountsList,
} as Meta;

const mockAccounts = [
  {name:'Poyraz', surname: 'Yilmaz', id: 0},
  {name:'Neslihan', surname: 'Yilmaz', id: 1},
  {name:'Badem', surname: 'Yilmaz', id: 2},
];

export const Default = () => (
  <AccountsList accounts={mockAccounts} />
);

Default.storyName = 'default';
