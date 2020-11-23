import configureMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import moxios from 'moxios';
import { AnyAction } from 'redux';

import { 
  createAccountError,
  createAccountSuccess,
  fetchAccountsError,
  fetchAccountsSuccess,
  thunkCreateAccount,
  thunkFetchAccounts,
} from '../actions';
import { ActionTypes as at, apiUrls } from '../constant';
import { Account } from '../types';
import { RootState } from '../../../store/reducer';

type DispatchExts = ThunkDispatch<RootState, undefined, AnyAction>;

const middlewares = [thunk];
const mockStore = configureMockStore<RootState, DispatchExts>(middlewares);
moxios.install();
const mockAccount: Account = { name: 'Poyraz', surname: 'Yilmaz', id: 0 };

describe('Accounts Actions', () => {

  describe('createAccountError' ,() => {
    it('should returns correct action', () => {
      const action = createAccountError();
      expect(action.type).toEqual(at.CreateAccountError);
    });
  });

  describe('createAccountSuccess' ,() => {
    it('should returns correct action', () => {
      const action = createAccountSuccess(mockAccount);
      expect(action.type).toEqual(at.CreateAccountSuccess);
      expect(action.payload).toEqual(mockAccount);
    });
  });

  describe('fetchAccountsError' ,() => {
    it('should returns correct action', () => {
      const action = fetchAccountsError();
      expect(action.type).toEqual(at.FetchAccountsError);
    });
  });

  describe('fetchAccountsSuccess' ,() => {
    it('should returns correct action', () => {
      const action = fetchAccountsSuccess([mockAccount]);
      expect(action.type).toEqual(at.FetchAccountsSuccess);
      expect(action.payload).toEqual([mockAccount]);
    });
  });

  describe('thunkCreateAccount' ,() => {
    it('should returns correct action', async () => {
      moxios.stubRequest(apiUrls.CreateAccount, {
        status: 200,
        response: mockAccount,
      });
      const expectedActions = [
        createAccountSuccess(mockAccount)
      ];
      const store = mockStore();

      await store.dispatch(thunkCreateAccount(mockAccount));
      expect(store.getActions()).toEqual(expectedActions)
    });
  });

  describe('thunkFetchAccounts' ,() => {

    it('should returns correct action', async () => {
      moxios.stubRequest(apiUrls.FetchAccounts, {
        status: 200,
        response: [mockAccount],
      });
      const expectedActions = [
        fetchAccountsSuccess([mockAccount])
      ];
      const store = mockStore();

      await store.dispatch(thunkFetchAccounts());
      expect(store.getActions()).toEqual(expectedActions)
    });
    
  });

});