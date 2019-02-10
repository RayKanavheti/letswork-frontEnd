import { IBid } from './bid';
import { IProjectCategory } from './projectCat';
import { ITask } from './task';
import { ICommon } from './common';
import { IProjectFile } from './projectFiles';
import { ISkill } from './skill';

export interface IProject extends ICommon {
    Title?: string;
    Description?: string;
    Duration?: string;
    IsComplete?: boolean;
    Status?: string; // active or not
    Assisted?: boolean;
    ProjectType?: string; // fixed or hourly
    Budget?: { minimum: number, maximum: number };
    Jobs?: ISkill[];
    Tasks?: ITask;
    Bids?: IBid;
    OwnerID?: number;
    ProjectFiles?: IProjectFile[];
    City?: string; // The place where the project is going to be executed

}

export class Project {
    Title?: string;
    Description?: string;
    Duration?: string;
    IsComplete?: boolean;
    Status?: string; // active or not
    Assisted?: boolean;
    ProjectType?: string; // fixed or hourly
    Budget?: { minimum: number, maximum: number };
    Jobs?: ISkill[];
    Tasks?: ITask;
    Bids?: IBid;
    OwnerID?: number;
    ProjectFiles?: IProjectFile[];
    City?: string; // The place where the project is going to be executed

    constructor() {
        this.Jobs = new Array<ISkill>();
    }
}