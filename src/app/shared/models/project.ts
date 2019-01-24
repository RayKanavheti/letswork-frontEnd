import { IBid } from './bid';


export interface IProject {
    ID?: number;
    CreatedAt?: string;
    UpdatedAt?: string;
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
