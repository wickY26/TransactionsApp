import React from 'react';
import { render } from '@testing-library/react';

import TransactionsListContainer from '..';
import { Transaction, TransactionAccount } from '../../types';

const mockAccount: TransactionAccount = {name: 'Poyraz', surname: 'Yilmaz', id: 0};
const mockTransaction: Transaction = { from: mockAccount, to: mockAccount, amount: 50, description: 'description', id: 0 };
const mockDispatch = jest.fn();
const mockSelector = jest.fn();
const mockThunkFetchTransaction = jest.fn();

jest.mock('react-redux', () => ({
  useSelector: () => mockSelector(),
  useDispatch: () => mockDispatch,
}));

jest.mock('../../actions', () => ({
  thunkFetchTransactions: () => mockThunkFetchTransaction(),
}));

const renderComponent = () => render(
  <TransactionsListContainer>
    {({transactions}) => (
      <ul>
        {transactions?.map(transaction => <li key={transaction.id}>{transaction.amount}</li>)}
      </ul>
    )}
  </TransactionsListContainer>
);

describe('TransactionsListContainer', () => {

  beforeEach(() => {
    mockSelector.mockReturnValue([mockTransaction]);
    mockThunkFetchTransaction.mockReturnValue('FetchTransactionAction');
  });

  it('should render correctly', () => {
    const component = renderComponent();
    expect(component.asFragment()).toMatchSnapshot();
  });

  it('should dispatch fetchTransactionsAction', () => {
    renderComponent();
    expect(mockThunkFetchTransaction).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith('FetchTransactionAction');
  });
  
  it('should select transactions from store', () => {
    renderComponent();
    expect(mockSelector).toHaveBeenCalled();
  });

});
