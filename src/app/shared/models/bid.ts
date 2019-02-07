import { ICommon } from './common';
export interface IBid extends ICommon {

    Amount?: string;
    Retracted?: boolean;
    Description?: string;
    MilestonePercentage?: number;
    Awarded?: boolean;
    DurationInDays?: string;
    ProjectID?: number;
    BidderID?: number;
}
