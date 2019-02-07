import { ICommon } from './common';
export interface IProfile extends ICommon {
    Name?: string;
    Surname?: string;
    PhoneNumber?: string;
    ImagePath?: string;
    FacebookProfile?: string;
    TwitterProfile?: string;
    LinkedInProfile?: string;
    Website?: string;
    UserID?: number;
}
