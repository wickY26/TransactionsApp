import React, { FC } from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import 'fontsource-roboto';

import AccountsListContainer from './containers/Accounts/AccountsListContainer';
import AccountCreateContainer from './containers/Accounts/AccountCreateContainer';
import AccountsList from './components/Accounts/AccountsList';
import AccountCreateForm from './components/Accounts/AccountCreateForm';
import TransactionsListContainer from './containers/Transactions/TransactionsListContainer';
import TransactionsList from './components/Transactions/TransactionsList';
import TransactionCreateForm from './components/Transactions/TransactionCreateForm';
import TransactionCreateContainer from './containers/Transactions/TransactionCrateContainer';
import Navbar from './components/Common/NavBar';
import Header from './components/Common/Header';

const App: FC = () => (
  <StylesProvider injectFirst>
    <Container maxWidth="sm" disableGutters>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/accounts/create">
            <Header title="New Account" link="/accounts" backIcon/>
            <AccountCreateContainer>
              {({onCreateAccount}) => (
                // <Button label="ff" onClick={()=> onCreateAccount({name:'vx', surname: 'vzxcv'})} />
                <AccountCreateForm onCreateAccount={onCreateAccount} />
              )}
            </AccountCreateContainer>
          </Route>
          <Route exact path="/accounts">
            <Header title="Accounts" link="/accounts/create" />
            <AccountsListContainer>
              {({accounts}) => (
                <AccountsList accounts={accounts} />
              )}
            </AccountsListContainer>
          </Route>
          <Route exact path="/transactions/create">
            <Header title="New Transaction" link="/transactions" backIcon/>
            <TransactionCreateContainer>
              {({onCreateTransaction, accounts}) => (
                <TransactionCreateForm onCreateTransaction={onCreateTransaction} accounts={accounts} />
              )}
            </TransactionCreateContainer>
          </Route>
          <Route exact path="/transactions">
            <Header title="Transactions" link="/transactions/create" />
            <TransactionsListContainer>
              {({transactions}) => (
                <TransactionsList transactions={transactions} />
              )}
            </TransactionsListContainer>
          </Route>
          <Route
              path="/"
              render={() => <Redirect to="/transactions" />}
            />
        </Switch>
      </Router>
    </Container>
  </StylesProvider>
);

export default App;
