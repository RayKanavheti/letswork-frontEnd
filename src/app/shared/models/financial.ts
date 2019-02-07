import { IEcocash } from './ecocash';
import { IBank } from './bank';
import { ICommon } from './common';
export interface IFinancial extends ICommon {

    Bank?: IBank;
    Ecocash?: IEcocash;
    UserID?: number;
}
