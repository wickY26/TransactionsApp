import { Action, combineReducers } from 'redux';
import { ThunkAction } from 'redux-thunk';

import accounts from '../containers/Accounts/reducer';
import transactions from '../containers/Transactions/reducer';

const rootReducer = combineReducers({
  accounts,
  transactions,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
export default rootReducer;
