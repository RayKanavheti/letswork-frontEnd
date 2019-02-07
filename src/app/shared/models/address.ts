import { ICommon } from './common';

export interface IAddress extends ICommon {
    Line1?: string;
    Suburb?: string;
    City?: string;
    Country?: string;
    UserID: number;
}
