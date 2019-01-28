export interface IEducation {
    ID?: number;
    CreatedAt?: string;
    UpdatedAt?: string;
    InstitutionName?: string;
    EducationType?: string;
    Period?: {StartDate: string, EndDate: string};
    UserID?: number;
}
