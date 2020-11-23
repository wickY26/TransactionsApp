import configureMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import moxios from 'moxios';
import { AnyAction } from 'redux';

import { 
  createTransactionError,
  createTransactionSuccess,
  fetchTransactionsError,
  fetchTransactionsSuccess,
  thunkCreateTransaction,
  thunkFetchTransactions,
} from '../actions';
import { ActionTypes as at, apiUrls } from '../constant';
import { Transaction, TransactionAccount, TransactionBody } from '../types';
import { RootState } from '../../../store/reducer';

type DispatchExts = ThunkDispatch<RootState, undefined, AnyAction>;

const middlewares = [thunk];
const mockStore = configureMockStore<RootState, DispatchExts>(middlewares);
moxios.install();
const mockAccount: TransactionAccount = {name: 'Poyraz', surname: 'Yilmaz', id: 0};
const mockTransaction: Transaction = { from: mockAccount, to: mockAccount, amount: 50, description: 'description', id: 0 };
const mockTransactionBody: TransactionBody = { from: 0, to: 1, amount: 50, description: 'description', };

describe('Transactions Actions', () => {

  describe('createTransactionError' ,() => {
    it('should returns correct action', () => {
      const action = createTransactionError();
      expect(action.type).toEqual(at.CreateTransactionError);
    });
  });

  describe('createTransactionSuccess' ,() => {
    it('should returns correct action', () => {
      const action = createTransactionSuccess(mockTransaction);
      expect(action.type).toEqual(at.CreateTransactionSuccess);
      expect(action.payload).toEqual(mockTransaction);
    });
  });

  describe('fetchTransactionsError' ,() => {
    it('should returns correct action', () => {
      const action = fetchTransactionsError();
      expect(action.type).toEqual(at.FetchTransactionsError);
    });
  });

  describe('fetchTransactionsSuccess' ,() => {
    it('should returns correct action', () => {
      const action = fetchTransactionsSuccess([mockTransaction]);
      expect(action.type).toEqual(at.FetchTransactionsSuccess);
      expect(action.payload).toEqual([mockTransaction]);
    });
  });

  describe('thunkCreateTransaction' ,() => {
    it('should returns correct action', async () => {
      moxios.stubRequest(apiUrls.CreateTransaction, {
        status: 200,
        response: mockTransaction,
      });
      const expectedActions = [
        createTransactionSuccess(mockTransaction)
      ];
      const store = mockStore();

      await store.dispatch(thunkCreateTransaction(mockTransactionBody));
      expect(store.getActions()).toEqual(expectedActions)
    });
  });

  describe('thunkFetchTransactions' ,() => {

    it('should returns correct action', async () => {
      moxios.stubRequest(apiUrls.FetchTransactions, {
        status: 200,
        response: [mockTransaction],
      });
      const expectedActions = [
        fetchTransactionsSuccess([mockTransaction])
      ];
      const store = mockStore();

      await store.dispatch(thunkFetchTransactions());
      expect(store.getActions()).toEqual(expectedActions)
    });
    
  });

});