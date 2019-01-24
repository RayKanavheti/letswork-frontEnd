export interface IEducation {
    ID?: number;
    CreatedAt?: string;
    UpdatedAt?: string;
    SchoolName?: string;
    EducationType?: string;
    Period?: {StartDate: string, EndDate: string};
    UserID?: number;
}
