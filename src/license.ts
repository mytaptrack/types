import { TrackedBehavior } from '.';

export interface MobileTemplate {
    deviceId: string;
    behaviors: TrackedBehavior[];
}
export interface LicenseDetails {
    license?: string;
    customer: string;
    singleCount: number;
    /**
     * An array of student ids
     */
    singleUsed: string[];
    multiCount: number;
    admins: string[];
    expiration: string;
    mobileTemplates: MobileTemplate[];
}

export interface LicenseDetailsWithUsage extends LicenseDetails {
    usage: {
        month: string;
        trackedEvents: number;
        studentsTracked: number;
    }[];
}
