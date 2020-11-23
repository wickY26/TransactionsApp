import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import AccountCreateContainer from '..';

const mockAccount = {name:'Poyraz', surname: 'Yilmaz', id: 0};
const mockDispatch = jest.fn();
const mockThunkCreateAccount = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}));

jest.mock('react-router-dom', () => ({
  Redirect: () => 'Redirect',
}));

jest.mock('../../actions', () => ({
  thunkCreateAccount: (acc: any) => mockThunkCreateAccount(acc),
}));

const renderComponent = () => render(
  <AccountCreateContainer>
    {({onCreateAccount}) => (
      <button onClick={()=> onCreateAccount(mockAccount)}>Button</button>
    )}
  </AccountCreateContainer>
);

describe('AccountCreateContainer', () => {

  beforeEach(() => {
    mockThunkCreateAccount.mockReturnValue('CreateUserAction');
  });

  it('should render correctly', () => {
    const component = renderComponent();
    expect(component.asFragment()).toMatchSnapshot();
  });

  it('should render redirect when onCreateAccount is called', () => {
    const component = renderComponent();
    fireEvent.click(screen.getByText('Button'));
    expect(component.asFragment()).toMatchSnapshot();
  });
  
  it('should dispatch createAccountAction when onCreateAccount is called', () => {
    renderComponent();
    fireEvent.click(screen.getByText('Button'));
    expect(mockThunkCreateAccount).toHaveBeenCalledWith(mockAccount);
    expect(mockDispatch).toHaveBeenCalledWith('CreateUserAction');
  });

});
