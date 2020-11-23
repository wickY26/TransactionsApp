import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import NavBar from '..';

export default {
  title: 'Common/NavBar',
  component: NavBar,
} as Meta;

export const Default = () => (
  <NavBar />
);

Default.storyName = 'default';
