import { ICommon } from './common';
export interface IEducation extends ICommon {

    InstitutionName?: string;
    EducationType?: string;
    Period?: {StartDate: string, EndDate: string};
    UserID?: number;
}
