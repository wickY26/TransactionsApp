import { Account } from '../../../containers/Accounts/types';

export interface AccountCreateFormProps {
  onCreateAccount: (data: Account) => void;
}
