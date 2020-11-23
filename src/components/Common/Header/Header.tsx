import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { HeaderProps } from './types';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

const Header: FC<HeaderProps> = ({ title, link, backIcon }) => (
  <>
    <Box display="flex" m={2} mr={0} alignItems="center">
      <Box display="flex" flexGrow={1}>
        <Typography variant="h4">
          {title}
        </Typography>
      </Box>
      {
        link && <Link to={link}>
          <IconButton>
            {
              backIcon ?
              <ArrowBackIcon color="primary" /> :
              <AddIcon color="primary" /> 
            }
          </IconButton>
        </Link>
      }
    </Box>
    <Divider />
  </>
);

export default Header;
