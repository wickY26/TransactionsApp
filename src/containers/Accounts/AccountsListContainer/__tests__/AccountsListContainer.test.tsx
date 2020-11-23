import React from 'react';
import { render } from '@testing-library/react';

import AccountsListContainer from '..';

const mockAccount = {name:'Poyraz', surname: 'Yilmaz', id: 0};
const mockDispatch = jest.fn();
const mockSelector = jest.fn();
const mockThunkFetchAccount = jest.fn();

jest.mock('react-redux', () => ({
  useSelector: () => mockSelector(),
  useDispatch: () => mockDispatch,
}));

jest.mock('../../actions', () => ({
  thunkFetchAccounts: () => mockThunkFetchAccount(),
}));

const renderComponent = () => render(
  <AccountsListContainer>
    {({accounts}) => (
      <ul>
        {accounts?.map(account => <li key={account.name}>{account.name}</li>)}
      </ul>
    )}
  </AccountsListContainer>
);

describe('AccountsListContainer', () => {

  beforeEach(() => {
    mockSelector.mockReturnValue([mockAccount]);
    mockThunkFetchAccount.mockReturnValue('FetchAccountAction');
  });

  it('should render correctly', () => {
    const component = renderComponent();
    expect(component.asFragment()).toMatchSnapshot();
  });

  it('should dispatch fetchAccountsAction', () => {
    renderComponent();
    expect(mockThunkFetchAccount).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith('FetchAccountAction');
  });
  
  it('should select accounts from store', () => {
    renderComponent();
    expect(mockSelector).toHaveBeenCalled();
  });

});
