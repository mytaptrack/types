import { QLLicenseSummary, UserSummaryRestrictions } from '..';

export interface QLUserUpdate extends QLUserSummary {
    students: {
        studentId: string;
        restrictions: UserSummaryRestrictions;
        delete: boolean;
        services: boolean;
        behaviors: boolean;
    }[];
}

export interface QLUser {
    id: string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    terms: string | undefined;
}

export interface QLUserSummary {
    id?: string;
    firstName: string;
    lastName: string;
    name: string;
    email: string;
    students: {
        studentId: string;
        restrictions: UserSummaryRestrictions
        services: boolean;
        behaviors: boolean;
    }[];
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
}

export interface QLLicenseUsersResult {
    users: QLUserSummary[];
    students: LicenseStudentSummary[];
}
