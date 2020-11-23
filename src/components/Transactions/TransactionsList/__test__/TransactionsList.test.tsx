import React from 'react';
import { render } from '@testing-library/react';

import TransactionsList from '..';

const mockAccount = {name: 'Poyraz', surname: 'Yilmaz', id: 0};
const mockTransactions = [{ from: mockAccount, to: mockAccount, amount: 50, description: 'description', id: 0 }];

const renderComponent = () => render(
  <TransactionsList transactions={mockTransactions} />
);

describe('TransactionsList', () => {

  it('should render correctly', () => {
    const component = renderComponent();
    expect(component.asFragment()).toMatchSnapshot();
  });

});
