import { Schema } from 'jsonschema';
import { LicenseDetails } from 'v1';
import { NotificationType, UserDetails, StudentDashboardSettings, UserDetailsSchema, LicenseFeatures, LicenseFeaturesSchema } from '../index';

export interface SubscriptionPostRequest {
    studentId: string;
}

export interface SubscriptionDeleteRequest {
    studentId: string;
    behaviorId: string;
    onEach: boolean;
}

export interface NotificationDeleteRequest {
    date: string;
    type: NotificationType | 'all';
    studentId?: string;
}

export interface PutSettingsRequest {
    studentId: string;
    settings: StudentDashboardSettings;
}

export interface UserPutRequest extends UserDetails {
    acceptTerms: boolean;
}
export const UserPutRequestSchema: Schema = {
    type: 'object',
    properties: {
        acceptTerms: { type: 'boolean' },
        ...UserDetailsSchema.properties
    },
    required: ['acceptTerms', ...(UserDetailsSchema.required as string[])],
};


export interface ApplyLicenseRequest {
    studentId: string;
    license: string;
    licenseDetails: {
        fullYear: boolean;
        flexible: boolean;
    };
}

export const ApplyLicenseRequestSchema: Schema = {
    type: 'object',
    properties: {
        studentId: { type: 'string', required: true },
        license: { type: 'string', required: true },
        licenseDetails: {
            type: 'object',
            properties: {
                fullYear: { type: 'boolean', required: true },
                flexible: { type: 'boolean', required: true }
            }
        }
    }
}
