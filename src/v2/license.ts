import { Schema } from 'jsonschema';
import { LicenseAppTemplate, LicenseStudentTemplate, ManageStatRow } from '.';

export interface SnapshotConfig {
    low: string;
    medium: string;
    high: string;
}

export interface LicenseFeatures {
    snapshot: boolean;
    snapshotConfig?: SnapshotConfig;
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
    manageStudentTemplates?: boolean;
    manageResponses?: boolean;
    abc?: boolean;
    notifications?: boolean;
}
export const LicenseFeaturesSchema: Schema = {
    type: 'object',
    properties: {
        snapshot: { type: 'boolean' },
        snapshotConfig: {
            type: 'object',
            properties: {
                low: { type: 'string', required: true },
                medium: { type: 'string', required: true },
                high: { type: 'string', required: true }
            }
        },
        dashboard: { type: 'boolean' },
        browserTracking: { type: 'boolean' },
        download: { type: 'boolean' },
        manage: { type: 'boolean' },
        supportChanges: { type: 'boolean' },
        schedule: { type: 'boolean' },
        devices: { type: 'boolean' },
        behaviorTargets: { type: 'boolean' },
        response: { type: 'boolean' },
        emailTextNotifications: { type: 'boolean' },
        manageStudentTemplates: { type: 'boolean' },
        manageAppTemplates: { type: 'boolean' },
        manageResponses: { type: 'boolean' },
        abc: { type: 'boolean' }
    }
}

export interface LicenseTagSet {
    name: string;
    tags: string[];
}
export interface AbcCollection {
    name: string;
    tags: string[];
    antecedents: string[];
    consequences: string[];
    overwrite?: boolean;
}
export const AbcCollectionSchema: Schema = {
    type: 'object',
    properties: {
        name: { type: 'string' },
        tags: { type: 'array', items: { type: 'string' }, required: true},
        antecedents: { type: 'array', items: { type: 'string' }, required: true},
        consequences: { type: 'array', items: { type: 'string' }, required: true},
        overwrite: { type: 'boolean' }
    }
}
export interface LicenseDetails {
    license?: string;
    customer: string;
    singleCount: number;
    /**
     * An array of student ids
     */
    singleUsed: number;
    multiCount: number;
    admins: string[];
    emailDomain: string;
    expiration: string;
    mobileTemplates?: LicenseAppTemplate[];
    studentTemplates?: LicenseStudentTemplate[];
    features?: LicenseFeatures;
    abcCollections?: AbcCollection[];
    tags: {
        devices: LicenseTagSet[];
    };
}

export const LicenseDetailsPutSchema: Schema = {
    type: 'object',
    properties: {
        license: { type: 'string' },
        customer: { type: 'string', required: true },
        singleCount: { type: 'number', required: true },
        multiCount: { type: 'number', required: true },
        admins: { type: 'list', items: [{ type: 'string' }], required: true, minimum: 1},
        expiration: { type: 'string', format: 'date' },
        features: LicenseFeaturesSchema
    }
};

export interface LicenseDetailsWithUsage extends LicenseDetails {
    usage: {
        month: string;
        trackedEvents: number;
        studentsTracked: number;
    }[];
}

export interface LicenseStats {
    stats: {
        single: number,
        flexible: ManageStatRow[];
    }
}