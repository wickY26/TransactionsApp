import { transactionsSelector, accountsSelector } from '../selectors';

const mockAccount = {name: 'Poyraz', surname: 'Yilmaz', id: 0};

const mockState = {
  accounts: {
    accounts: [mockAccount],
  },
  transactions: {
    transactions: [{ from: mockAccount, to: mockAccount, amount: 50, description: 'description', id: 0 }],
  },
};

describe('Transactions Selectors', () => {

  describe('TransactionsSelector' ,() => {

    it('should returns transactions from given state', () => {
      expect(transactionsSelector(mockState)).toEqual(mockState.transactions.transactions);
    });
    
  });

  describe('AccountsSelector' ,() => {

    it('should returns accounts from given state', () => {
      expect(accountsSelector(mockState)).toEqual(mockState.accounts.accounts);
    });
    
  });

});