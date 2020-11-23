import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import NavBar from '..';

jest.mock('react-router-dom', () => ({
  Link: 'button',
}));

const renderComponent = () => render(
  <NavBar />
);

describe('NavBar', () => {

  it('should render correctly', () => {
    const component = renderComponent();

    expect(component.asFragment()).toMatchSnapshot();
  });

  it('should open menu on click to hamburger button', () => {
    renderComponent();

    fireEvent.click(screen.getByLabelText('menu'));
    const menuItems = screen.getAllByRole('menuitem');
    expect(menuItems.length).toEqual(2);
    expect(menuItems[0]).toHaveFocus();
  });

  it('should close menu on click to one of the menu item', () => {
    renderComponent();

    fireEvent.click(screen.getByLabelText('menu'));
    const menuItems = screen.getAllByRole('menuitem');
    expect(menuItems[0]).toBeVisible();
    menuItems[0].click();
    expect(menuItems[0]).not.toBeVisible();
  });

});
