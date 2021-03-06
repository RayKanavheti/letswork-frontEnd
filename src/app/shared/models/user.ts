import { IProfile } from './profile';
import { IEducation } from './education';
import { IAddress } from './address';
import { IFinancial } from './financial';
import { IPortfolio } from './portfolio';
import { ISkill } from './skill';
import { ICommon } from './common';
export interface IUser extends ICommon {
    ID?: number;
    CreatedAt?: string;
    UpdatedAt?: string;
    DeletedAt?: string;
    Username?: string;
    Email?: string;
    Password?: string;
    Profile?: IProfile;
    Educations?: IEducation[];
    Address?: IAddress;
    Financial?: IFinancial;
    Portfolios?: IPortfolio[];
    Skills?: ISkill[];
    Verified?: boolean;
    ResetKey?: string;
}

