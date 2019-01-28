import { IEcocash } from './ecocash';
import { IBank } from './bank';

export interface IFinancial {
    ID?: number;
    CreatedAt?: string;
    UpdatedAt?: string;
    Bank?: IBank;
    Ecocash?: IEcocash;
    UserID?: number;
}
