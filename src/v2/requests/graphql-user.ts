import { QLLicenseSummary, UserSummaryRestrictions, UserSummaryStatus } from '..';

export interface QLUserUpdate extends QLUserSummary {
    students: QLUserUpdateStudent[];
}

export interface QLUserMajorFeatures {
    license: string;
    behaviorTracking: boolean;
    serviceTracking: boolean;
    manage: boolean;
}

export interface QLUser {
    id?: string;
    firstName?: string;
    lastName?: string;
    name?: string;
    terms?: string;
    email?: string;
    state?: string;
    zip?: string;
    majorFeatures: QLUserMajorFeatures;
}

export interface QLUserSummaryStudent {
    studentId: string;
    restrictions: UserSummaryRestrictions
    services: boolean;
    behaviors: boolean;
    teamStatus: UserSummaryStatus;
}
export interface QLUserUpdateStudent extends QLUserSummaryStudent {
    deleted?: boolean;
}

export interface QLUserSummary {
    id?: string;
    firstName: string;
    lastName: string;
    name: string;
    email: string;
    state?: string;
    zip?: string;
    students: QLUserSummaryStudent[];
}

export interface LicenseStudentSummary {
    id: string;
    name: string;
    firstName: string;
    lastName: string;
    schoolId: string;
    licenseDetails: QLLicenseSummary;
    behaviors: { 
        id: string;
        name: string;
    }[];
    services: {
        id: string;
        name: string;
    }[];
}

export interface QLLicenseUsersResult {
    users: QLUserSummary[];
    students: LicenseStudentSummary[];
}
