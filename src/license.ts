import { TrackedBehavior } from '.';

export interface MobileTemplate {
    deviceId: string;
    behaviors: TrackedBehavior[];
}
export interface LicenseFeatures {
    snapshot: boolean;
    dashboard: boolean;
    browserTracking: boolean;
    download: boolean;
    manage: boolean;
    supportChanges: boolean;
    schedule: boolean;
    devices: boolean;
    behaviorTargets: boolean;
    response: boolean;
    emailTextNotifications: boolean;
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
    features?: LicenseFeatures;
}

export interface LicenseDetailsWithUsage extends LicenseDetails {
    usage: {
        month: string;
        trackedEvents: number;
        studentsTracked: number;
    }[];
}
