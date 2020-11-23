import React, { FC, FormEvent, useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';

import { TransactionCreateFormProps } from './types';

const TransactionCreateForm: FC<TransactionCreateFormProps> = ({ onCreateTransaction }) => {
  const [from, setFrom] = useState<string>('');
  const [to, setTo] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
      evt.preventDefault();
      onCreateTransaction({ 
        from: parseInt(from),
        to: parseInt(to), 
        amount: parseInt(amount), 
        description,
      });
      setFrom('');
      setTo('');
      setAmount('');
      setDescription('');
  }

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" m={2}>
        <TextField
          inputProps={{ "data-testid": "from" }}
          margin="normal"
          label="From"
          value={from}
          type="number"
          onChange={e => setFrom(e.target.value)}/>
        <TextField
          inputProps={{ "data-testid": "to" }}
          margin="normal"
          label="To" 
          value={to}
          type="number"
          onChange={e => setTo(e.target.value)}/>
        <TextField
          inputProps={{ "data-testid": "amount" }}
          margin="normal"
          label="Amount" 
          value={amount}
          type="number"
          onChange={e => setAmount(e.target.value)}/>
        <TextField
          inputProps={{ "data-testid": "description" }}
          margin="normal"
          label="Description" 
          value={description}
          onChange={e => setDescription(e.target.value)}/>
        <Button
          data-testid="submitBtn"
          variant="contained"
          color="primary"
          startIcon={<SaveIcon />}
          type="submit"
          disabled={!from || !to || !amount || !description}
        >
          Create
        </Button>
      </Box>
    </form>
  );
}

export default TransactionCreateForm;
