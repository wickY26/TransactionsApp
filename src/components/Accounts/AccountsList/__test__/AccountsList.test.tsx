import React from 'react';
import { render } from '@testing-library/react';

import AccountsList from '..';

const mockAccounts = [{name:'Poyraz', surname: 'Yilmaz', id: 0}];

const renderComponent = () => render(
  <AccountsList accounts={mockAccounts} />
);

describe('AccountsList', () => {

  it('should render correctly', () => {
    const component = renderComponent();
    expect(component.asFragment()).toMatchSnapshot();
  });

});
