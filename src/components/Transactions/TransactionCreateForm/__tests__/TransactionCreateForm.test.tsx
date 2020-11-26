import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import TransactionCreateForm from '..';

const mockAccount = {name: 'Poyraz', surname: 'Yilmaz', id: 0};
const mockAccount2 = {name: 'Neslihan', surname: 'Yilmaz', id: 1};
const mockAccounts = [mockAccount, mockAccount2];
const mockOnCreateTransaction = jest.fn();

const renderComponent = () => render(
  <TransactionCreateForm onCreateTransaction={mockOnCreateTransaction} accounts={mockAccounts} />
);

describe('TransactionCreateForm', () => {

  it('should render correctly', () => {
    const component = renderComponent();
    expect(component.asFragment()).toMatchSnapshot();
  });

  it('should make submit button disabled when name or surname fields empty', () => {
    renderComponent();

    expect(screen.getByTestId('submitBtn')).toHaveAttribute('disabled');
  });

  it('should call onCreateTransaction when form is submitted', () => {
    renderComponent();

    const fromAutocomplete = screen.getByTestId('from-autocomplete');
    const toAutocomplete = screen.getByTestId('to-autocomplete');

    fireEvent.keyDown(fromAutocomplete, { key: 'ArrowDown' });
    fireEvent.keyDown(fromAutocomplete, { key: 'Enter' });

    fireEvent.keyDown(toAutocomplete, { key: 'ArrowDown' });
    fireEvent.keyDown(toAutocomplete, { key: 'Enter' });

    fireEvent.change(screen.getByTestId('amount'), { target: { value: '250' } });
    fireEvent.change(screen.getByTestId('description'), { target: { value: 'Description' } });
    fireEvent.click(screen.getByTestId('submitBtn'));

    expect(mockOnCreateTransaction).toHaveBeenCalled();
    expect(mockOnCreateTransaction).toHaveBeenCalledWith({from:0, to: 1, amount: 250, description: 'Description'});
  });

  it('should reset form after submit', () => {
    renderComponent();
    const fromField = screen.getByTestId('from') as HTMLInputElement;
    const toField = screen.getByTestId('to') as HTMLInputElement;
    const amountField = screen.getByTestId('amount') as HTMLInputElement;
    const descriptionField = screen.getByTestId('description') as HTMLInputElement;
    const fromAutocomplete = screen.getByTestId('from-autocomplete');
    const toAutocomplete = screen.getByTestId('to-autocomplete');

    fireEvent.keyDown(fromAutocomplete, { key: 'ArrowDown' });
    fireEvent.keyDown(fromAutocomplete, { key: 'Enter' });

    fireEvent.keyDown(toAutocomplete, { key: 'ArrowDown' });
    fireEvent.keyDown(toAutocomplete, { key: 'Enter' });

    fireEvent.change(screen.getByTestId('amount'), { target: { value: '250' } });
    fireEvent.change(screen.getByTestId('description'), { target: { value: 'Description' } });
    fireEvent.click(screen.getByTestId('submitBtn'));

    expect(fromField.value).toEqual('');
    expect(toField.value).toEqual('');
    expect(amountField.value).toEqual('');
    expect(descriptionField.value).toEqual('');
  });

});
