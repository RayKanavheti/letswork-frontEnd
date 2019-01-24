export interface ITask {
    ID?: number;
    CreatedAt?: string;
    UpdatedAt?: string;
    Amount?: number;
    Status?: boolean;
    Reason?: string;
    Description?: string;
    DocPath?: string;
    ProjectID?: number;
    AssigneeID?: number;
    AssignerID?: number;
}
