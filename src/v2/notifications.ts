import { Schema } from "jsonschema";

export interface Notification<T extends NotificationDetails> {
    date: number;
    details: T;
}

export enum NotificationType {
    BehaviorChange = 'behavior-change',
    ShareReport = 'share-report',
    TeamInvite = 'invite',
    Behavior = 'behavior'
}

export interface NotificationDetails {
    type: NotificationType;
}

export interface NotificationDetailsBehavior extends NotificationDetails {
    behaviorId: string;
    studentId: string;
}

export interface NotificationDetailsTeam extends NotificationDetails {
    studentFirstName: string;
    studentLastName: string;
    role: string;
    studentId: string;
    admin?: boolean;
    access: UserSummaryRestrictions;
}

export enum AccessLevel {
    admin = 'Admin',
    read = 'Read',
    none = 'No Access'
}
export const AccessLevelSchema: Schema = {
    type: 'string',
    'enum': ['Admin','Read','No Access'],
    required: true
}

export interface UserSummaryRestrictions {
    data: AccessLevel;
    schedules: AccessLevel;
    devices: AccessLevel;
    team: AccessLevel;
    comments: AccessLevel;
    behavior: AccessLevel;
    abc: AccessLevel;
    behaviors?: string[];
    milestones: AccessLevel;
    reports: AccessLevel;
    reportsOverride?: boolean;
    transferLicense?: boolean;
}


export interface StudentSubscriptionsBehavior {
    behaviorId: string;
    userIds: string[]
    emails: string[];
    mobiles: string[];
    deviceIds: string[];
    messages: {
        default?: string;
        email?: string;
        text?: string;
        app?: string;
    }
}
const StudentSubscriptionsBehaviorSchema: Schema = {
    type: 'object',
    properties: {
        behaviorId: { type: 'string' },
        userIds: {
            type: 'list',
            items: [{ type: 'string' }],
            required: true
        },
        emails: {
            type: 'list',
            items: [{ type: 'string' }],
            required: true
        },
        mobiles: {
            type: 'list',
            items: [{ type: 'string' }],
            required: true
        },
        deviceIds: {
            type: 'list',
            items: [{ type: 'string' }],
            required: true
        },
        messages: {
            type: 'object',
            properties: {
                default: { type: 'string' },
                email: { type: 'string' },
                text: { type: 'string' },
                app: { type: 'string' }
            }
        }
    }
}

export interface StudentSubscriptions {
    studentId: string;
    license: string;
    behaviors: StudentSubscriptionsBehavior[];
    updateEpoc?: number;
}

export const StudentSubscriptionsSchema: Schema = {
    type: 'object',
    properties: {
        studentId: { type: 'string', required: true },
        license: { type: 'string', required: true },
        updateEpoc: { type: 'number', required: true },
        behaviors: {
            type: 'list',
            items: [StudentSubscriptionsBehaviorSchema]
        }
    }
}
