import { TransactionBody } from '../../../containers/Transactions/types';

export interface TransactionCreateFormProps {
  onCreateTransaction: (data: TransactionBody) => void;
}
