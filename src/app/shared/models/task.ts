import { ICommon } from './common';
export interface ITask extends ICommon {

    Amount?: number;
    Status?: boolean;
    Reason?: string;
    Description?: string;
    DocPath?: string;
    ProjectID?: number;
    AssigneeID?: number;
    AssignerID?: number;
}
