import { transactionsSelector } from '../selectors';

const mockAccount = {name: 'Poyraz', surname: 'Yilmaz', id: 0};

const mockState = {
  accounts: {
    accounts: [mockAccount],
  },
  transactions: {
    transactions: [{ from: mockAccount, to: mockAccount, amount: 50, description: 'description', id: 0 }],
  },
};

describe('Accounts Selectors', () => {

  describe('AccountsSelector' ,() => {

    it('should returns transaction from given state', () => {
      expect(transactionsSelector(mockState)).toEqual(mockState.transactions.transactions);
    });
    
  });

});