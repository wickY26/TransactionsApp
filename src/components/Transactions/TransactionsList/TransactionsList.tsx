import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import React, { FC } from 'react';

import { TransactionsListProps } from './types';
import * as SC from './styles/StyledComponents';

const TransactionsList: FC<TransactionsListProps> = ({ transactions }) => (
  <List data-testid="transactions-list" disablePadding>
    {
      transactions.map(({ from, to, amount, description, id }) => (
        <ListItem key={id}>
          <ListItemAvatar>
            <Avatar>
              <AccountBalanceIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText secondary={description}>
            <SC.AccountText>{`${from.name} ${from.surname} `}</SC.AccountText>
            sent
            <SC.MoneyText>{` ${amount}€ ` }</SC.MoneyText>
            to
            <SC.AccountText>{` ${to.name} ${to.surname}`}</SC.AccountText>
          </ListItemText>
        </ListItem>
      ))
    }
  </List>
);

export default TransactionsList;