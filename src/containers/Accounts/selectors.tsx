import { RootState } from "../../store/reducer";

export const accountsSelector = (state: RootState) => state.accounts.accounts;