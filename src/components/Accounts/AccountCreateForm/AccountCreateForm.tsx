import React, { FC, FormEvent, useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';

import { AccountCreateFormProps } from './types';

const AccountCreateForm: FC<AccountCreateFormProps> = ({ onCreateAccount }) => {
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
      evt.preventDefault();
      onCreateAccount({ name, surname });
      setName('');
      setSurname('');
  }

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" m={2}>
        <TextField
          inputProps={{ "data-testid": "name" }}
          margin="normal"
          label="Name" 
          value={name}
          onChange={e => setName(e.target.value)}/>
        <TextField
          inputProps={{ "data-testid": "surname" }}
          margin="normal"
          label="Surname" 
          value={surname}
          onChange={e => setSurname(e.target.value)}/>
        <Button
          data-testid="submitBtn"
          variant="contained"
          color="primary"
          startIcon={<SaveIcon />}
          type="submit"
          disabled={!name || !surname}
        >
          Create
        </Button>
      </Box>
    </form>
  );
}

export default AccountCreateForm;
