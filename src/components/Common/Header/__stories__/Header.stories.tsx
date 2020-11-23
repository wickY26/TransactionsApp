import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { text, boolean } from '@storybook/addon-knobs';

import Header from '..';

export default {
  title: 'Common/Header',
  component: Header,
} as Meta;

export const Default = () => (
  <Header title={text('Button Label', 'Button Label')} link={text('Link', '/link')} backIcon={boolean('Show Back Icon', false)} />
);

Default.storyName = 'default';
