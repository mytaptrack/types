import { Schema } from 'jsonschema';
import { NotificationType, UserDetails, StudentDashboardSettings, UserDetailsSchema } from '../index';

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
    fullYear: boolean;
    remove?: boolean;
}
