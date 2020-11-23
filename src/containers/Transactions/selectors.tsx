import { RootState } from "../../store/reducer";

export const transactionsSelector = (state: RootState) => state.transactions.transactions;