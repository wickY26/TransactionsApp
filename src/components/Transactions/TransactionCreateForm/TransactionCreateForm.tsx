import React, { FC, FormEvent, ChangeEvent, useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { TransactionCreateFormProps } from './types';
import { Account } from '../../../containers/Accounts/types';

const TransactionCreateForm: FC<TransactionCreateFormProps> = ({ onCreateTransaction, accounts }) => {
  const [from, setFrom] = useState<Account | null>(null);
  const [to, setTo] = useState<Account | null>(null);
  const [amount, setAmount] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
      evt.preventDefault();
      onCreateTransaction({ 
        from: from?.id!,
        to: to?.id!, 
        amount: parseInt(amount), 
        description,
      });
      setFrom(null);
      setTo(null);
      setAmount('');
      setDescription('');
  }

  const getOptions = (accounts: Account[], selectedId: number | undefined) => accounts.filter(({ id }) => id !== selectedId)

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" m={2}>
        <Autocomplete
          id="from-autocomplete"
          data-testid="from-autocomplete"
          options={getOptions(accounts, to?.id)} 
          getOptionLabel={({ name, surname }: Account) => `${name} ${surname}`}
          autoComplete
          autoHighlight
          fullWidth
          onChange={(evt: ChangeEvent<{}>, value: Account | null) => setFrom(value)}
          value={from}
          renderInput={(params) => <TextField {...params} inputProps={{ ...params.inputProps, "data-testid": "from"  }} margin="normal" label="From" />}
        />
        <Autocomplete
          id="to-autocomplete"
          data-testid="to-autocomplete"
          options={getOptions(accounts, from?.id)}
          getOptionLabel={({ name, surname }: Account) => `${name} ${surname}`}
          autoComplete
          autoHighlight
          fullWidth
          onChange={(evt: ChangeEvent<{}>, value: Account | null) => setTo(value)}
          value={to}
          renderInput={(params) => <TextField {...params} inputProps={{ ...params.inputProps, "data-testid": "to"  }} margin="normal" label="To" />}
        />
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
          disabled={!from || !to || !amount || !description}
          data-testid="submitBtn"
          variant="contained"
          color="primary"
          startIcon={<SaveIcon />}
          type="submit"
        >
          Create
        </Button>
      </Box>
    </form>
  );
}

export default TransactionCreateForm;
