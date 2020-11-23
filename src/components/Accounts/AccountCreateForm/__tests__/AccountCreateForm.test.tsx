import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import AccountCreateForm from '..';

const mockOnCreateAccount = jest.fn();

const renderComponent = () => render(
  <AccountCreateForm onCreateAccount={mockOnCreateAccount} />
);

describe('AccountCreateForm', () => {

  it('should render correctly', () => {
    const component = renderComponent();
    expect(component.asFragment()).toMatchSnapshot();
  });

  it('should make submit button disabled when name or surname fields empty', () => {
    renderComponent();

    expect(screen.getByTestId('submitBtn')).toHaveAttribute('disabled');
  });

  it('should call onCreateAccount when form is submitted', () => {
    renderComponent();

    fireEvent.change(screen.getByTestId('name'), { target: { value: 'Poyraz' } });
    fireEvent.change(screen.getByTestId('surname'), { target: { value: 'Yilmaz' } });
    fireEvent.click(screen.getByTestId('submitBtn'));

    expect(mockOnCreateAccount).toHaveBeenCalled();
    expect(mockOnCreateAccount).toHaveBeenCalledWith({name:'Poyraz', surname: 'Yilmaz'});
  });

  it('should reset form after submit', () => {
    renderComponent();
    const nameField = screen.getByTestId('name') as HTMLInputElement;
    const surnameField = screen.getByTestId('surname') as HTMLInputElement;

    fireEvent.change(nameField, { target: { value: 'Poyraz' } });
    fireEvent.change(surnameField, { target: { value: 'Yilmaz' } });
    fireEvent.click(screen.getByTestId('submitBtn'));

    expect(nameField.value).toEqual('');
    expect(surnameField.value).toEqual('');
  });

});
