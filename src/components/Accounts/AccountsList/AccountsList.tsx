import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import React, { FC } from 'react';

import { AccountsListProps } from './types';

const AccountsList: FC<AccountsListProps> = ({ accounts }) => (
  <List disablePadding>
    {
      accounts.map(({ name, surname, id }) => (
        <ListItem key={id}>
          <ListItemAvatar>
            <Avatar>
              <AccountBoxIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`${name} ${surname}`}
            secondary="Secondary text"
          />
        </ListItem>
      ))
    }
  </List>
);

export default AccountsList;