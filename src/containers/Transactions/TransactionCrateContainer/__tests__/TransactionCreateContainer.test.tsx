import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import TransactionCreateContainer from '..';
import { TransactionBody } from '../../types';

const mockTransactionBody: TransactionBody = { from: 0, to: 1, amount: 50, description: 'description' };
const mockDispatch = jest.fn();
const mockThunkCreateTransaction = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}));

jest.mock('react-router-dom', () => ({
  Redirect: () => 'Redirect',
}));

jest.mock('../../actions', () => ({
  thunkCreateTransaction: (transaction: any) => mockThunkCreateTransaction(transaction),
}));

const renderComponent = () => render(
  <TransactionCreateContainer>
    {({onCreateTransaction}) => (
      <button onClick={()=> onCreateTransaction(mockTransactionBody)}>Button</button>
    )}
  </TransactionCreateContainer>
);

describe('TransactionCreateContainer', () => {

  beforeEach(() => {
    mockThunkCreateTransaction.mockReturnValue('CreateUserAction');
  });

  it('should render correctly', () => {
    const component = renderComponent();
    expect(component.asFragment()).toMatchSnapshot();
  });

  it('should render redirect when onCreateTransaction is called', () => {
    const component = renderComponent();
    fireEvent.click(screen.getByText('Button'));
    expect(component.asFragment()).toMatchSnapshot();
  });
  
  it('should dispatch createTransactionAction when onCreateTransaction is called', () => {
    renderComponent();
    fireEvent.click(screen.getByText('Button'));
    expect(mockThunkCreateTransaction).toHaveBeenCalledWith(mockTransactionBody);
    expect(mockDispatch).toHaveBeenCalledWith('CreateUserAction');
  });

});
