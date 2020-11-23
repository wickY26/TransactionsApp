import React from 'react';
import { render } from '@testing-library/react';

import Header from '..';
import { HeaderProps } from '../types';

jest.mock('react-router-dom', () => ({
  Link: 'div',
}));

const renderComponent = (props?: Partial<HeaderProps>) => render(
  <Header title="Title"  {...props} />
);

describe('Header', () => {

  it('should render correctly', () => {
    const component = renderComponent();
    expect(component.asFragment()).toMatchSnapshot();
  });

  it('should render link', () => {
    const component = renderComponent({ link: '/link'});
    expect(component.asFragment()).toMatchSnapshot();
  });

  it('should render back icon', () => {
    const component = renderComponent({ link: '/link', backIcon: true });
    expect(component.asFragment()).toMatchSnapshot();
  });

});
