import { IBid } from './bid';
import { IProjectCategory } from './projectCat';
import { ITask } from './task';
import { ICommon } from './common';

export interface IProject extends ICommon {

    Title?: string;
    Description?: string;
    DocPath1?: string;
    DocPath2?: string;
    DocPath3?: string;
    Duration?: string;
    IsComplete?: boolean;
    Status?: string;
    Assisted?: boolean;
    Budget?: { minimum: number, maximum: number };
    Jobs?: IProjectCategory;
    Tasks?: ITask;
    Bids?: IBid;
    OwnerID?: number;

}
