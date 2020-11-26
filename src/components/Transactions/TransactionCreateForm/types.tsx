import { Account } from '../../../containers/Accounts/types';
import { TransactionBody } from '../../../containers/Transactions/types';

export interface TransactionCreateFormProps {
  onCreateTransaction: (data: TransactionBody) => void;
  accounts: Account[];
}
