export interface IBid {
    ID?: number;
    CreatedAt?: string;
    UpdatedAt?: string;
    Amount?: string;
    Retracted?: boolean;
    Description?: string;
    MilestonePercentage?: number;
    Awarded?: boolean;
    DurationInDays?: string;
    ProjectID?: number;
    BidderID?: number;
}
