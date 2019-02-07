
import { ICommon } from './common';
export interface IBank extends ICommon  {

    BankName?: string;
    AccountName?: string;
    AccountNumber?: string;
    BranchCode?: string;
    BranchName?: string;
    FinancialID?: number;
}
