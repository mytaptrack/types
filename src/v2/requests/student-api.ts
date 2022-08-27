import { 
    StudentBehavior, TeamRole, UserSummaryRestrictions, 
    ReportData, IoTDeviceSubscription, Milestone, StudentResponse, 
    AbcCollection, AbcCollectionSchema, ActivityGroupDetails, 
    StudentDashboardSettings, UserSummary, CommandSwitchStudent
} from '..';
import { Schema } from 'jsonschema';
import { StudentSummaryReport } from 'v1';

export interface ActivityRequest {
    studentId: string;
    date: string;
    schedule: ActivityGroupDetails;
}

export interface ActivityPutResponse {
    id: string;
}

export interface StudentBehaviorDeleteRequest {
    behaviorId: string;
    studentId: string;
}
export const StudentBehaviorDeleteRequestSchema: Schema = {
    type: 'object',
    properties: {
        behaviorId: { type: 'string', required: true },
        studentId: { type: 'string', required: true }
    }
}

export interface StudentBehaviorGetRequest {
    behavior: string;
    studentId: string;
}

export interface StudentBehaviorPutRequest {
    studentId: string;
    behavior: StudentBehavior;
}

export const StudentBehaviorTargetSchema: Schema = {
    type: 'object',
    properties: {
        targetType: { type: 'string', required: true },
        target: { type: 'number', required: true },
        progress: { type: 'number' },
        measurement: { type: 'string', required: true }
    }
}
export const StudentBehaviorSchema: Schema = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        name: { type: 'string', required: true },
        isArchived: { type: 'boolean' },
        isDuration: { type: 'boolean' },
        managed: { type: 'boolean' },
        desc: { type: 'string' },
        daytime: { type: 'boolean' },
        requireResponse: { type: 'boolean' },
        targets: {
            type: 'list',
            items: [StudentBehaviorTargetSchema]
        },
        tags: {
            type: 'array',
            items: { type: 'string' }
        }
    }
};
export const StudentBehaviorPutRequestSchema: Schema = {
    type: 'object',
    properties: {
        studentId: { type: 'string' },
        behavior: StudentBehaviorSchema
    },
    required: ['studentId', 'behavior']
}

export interface StudentResponsePutRequest {
    studentId: string;
    response: StudentResponse;
}

export const StudentResponseSettingSchema: Schema = {
    type: 'object',
    properties: {
        behaviorId: { type: 'string', required: true },
        stopDuration: { type: 'boolean' }
    }
}

export const StudentResponseSchema: Schema = {
    type: 'object',
    properties: {
        ...StudentBehaviorSchema.properties,
        appliedToBehaviors: {
            type: 'array',
            items: StudentResponseSettingSchema,
            required: true
        }
    }
};
export const StudentResponsePutRequestSchema: Schema = {
    type: 'object',
    properties: {
        studentId: { type: 'string' },
        response: StudentResponseSchema
    },
    required: ['studentId', 'behavior']
}

export interface DeleteDeviceRequest {
    dsn: string;
    studentId: string;
}
export const DeleteDeviceRequestSchema: Schema = {
    type: 'object',
    properties: {
        dsn: { type: 'string' },
        studentId: { type: 'string' },
        isApp: { type: 'boolean' }
    },
    required: ['dsn', 'studentId']
}

export interface TrackDeviceTermStatus {
    termSet: boolean;
    term: string;
}

export interface TrackDeviceActionRequest {
    dsn: string;
    studentId: string;
}
export const TrackDeviceActionRequestSchema: Schema = {
    type: 'object',
    properties: {
        dsn: { type: 'string', required: true },
        studentId: { type: 'string', required: true }
    }
}

export interface DeviceRegisterPutRequest {
    dsn: string;
    studentId: string;
    license?: string;
}
export const DeviceRegisterPutRequestSchema: Schema = {
    type: 'object',
    properties: {
        dsn: { type: 'string', required: true },
        studentId: { type: 'string', required: true },
        license: { type: 'string' }
    }
}

export interface DevicePutRequest {
    dsn: string;
    deviceName: string;
    studentId: string;
    events: DevicePutRequestEvent[];
    timezone: string;
}
export const DevicePutRequestSchema: Schema = {
    type: 'object',
    properties: {
        dsn: { type: 'string', required: true },
        deviceName: { type: 'string', required: true },
        studentId: { type: 'string', required: true },
        events: {
            type: 'array',
            items: [
                {
                    type: 'object',
                    properties: {
                        eventId: { type: 'string'},
                        presses: { type: 'number' }  
                    }
                }
            ],
            required: true
        },
        subscriptions: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    type: { type: 'string' },
                    userId: { type: 'string' },
                    email: { type: 'boolean' },
                    sms: { type: 'boolean' }
                },
                required: ['type','userId']
            }
        },
        timezone: { type: 'string', required: true }
    }
};
export interface AppPutRequest {
    dsn: string;
    deviceId: string;
    deviceName: string;
    studentName: string;
    studentId: string;
    events: DevicePutRequestEvent[];
}
export const AppPutRequestSchema: Schema = {
    type: 'object',
    properties: {
        dsn: { type: 'string' },
        deviceId: { type: 'string' },
        studentName: { type: 'string', required: true },
        deviceName: { type: 'string', required: true },
        studentId: { type: 'string', required: true },
        events: {
            type: 'array',
            items: [
                {
                    type: 'object',
                    properties: {
                        eventId: { type: 'string', required: true},
                        track: { type: 'boolean', required: true},
                        abc: { type: 'boolean'},
                        order: { type: 'number', required: true }
                    }
                }
            ],
            required: true
        },
        subscriptions: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    type: { type: 'string', required: true },
                    userId: { type: 'string', required: true },
                    email: { type: 'boolean' },
                    sms: { type: 'boolean' }
                }
            }
        },
        switchTerm: { type: 'boolean' },
        timezone: { type: 'string' }
    }
};

export interface DeviceResyncPostRequest {
    dsn: string;
    studentId: string;
}
export const DeviceResyncPostRequestSchema: Schema = {
    type: 'object',
    properties: {
        dsn: { type: 'string', required: true },
        studentId: { type: 'string', required: true }
    }
}

export interface DevicePutRequestEvent {
    eventId: string;
    track?: boolean;
    abc?: boolean;
    order: number;
}

export interface StudentCreateRequest {
    role?: TeamRole;
    firstName: string;
    lastName: string;
    studentId: string;
    milestones: Milestone[];
    responses: StudentResponse[];
    tags: string[];
}

export interface ReportDataRequest {
    studentId: string;
    reportId?: string;
}

export interface ReportDataPostRequest {
    studentId: string;
    reportId?: string;
    date: string;
}

export interface ReportDataDeletetRequest {
    studentId: string;
    item: ReportData;
}

export interface ReportDataPostRequest {
    studentId: string;
    reportId?: string;
    date: string;
    dateOffset: number;
}

export interface TeamDeleteRequest {
    studentId: string;
    userId: string;
}
export const TeamDeleteRequestSchema: Schema = {
    type: 'object',
    properties: {
        studentId: { type: 'string', required: true },
        userId: { type: 'string', required: true }
    }
}

export interface TeamPostRequest {
    studentId: string;
    inviteDate: string;
    accepted: boolean;
}

export interface TeamPutRequest extends UserSummary {
}



export interface StudentAbcPut extends AbcCollection {
    studentId: string;
}
export const StudentAbcPutSchema: Schema = {
    type: 'object',
    properties: {
        name: { type: 'string' },
        tags: { type: 'array', items: { type: 'string' }, required: true},
        antecedents: { type: 'array', items: { type: 'string' }, required: true},
        consequences: { type: 'array', items: { type: 'string' }, required: true},
        overwrite: { type: 'boolean' },
        studentId: { type: 'string', required: true }
    }
}

export interface StudentAbcDelete {
    studentId: string;
}
export const StudentAbcDeleteSchema: Schema = {
    type: 'object',
    properties: {
        studentId: { type: 'string', required: true }
    }
}

export interface StudentDataPut {
    studentId: string;
    behaviorId: string;
    eventDate: string;
    abc?: {
        a: string;
        c: string;
    }
}

export interface StudentNotesPut {
    studentId: string;
    lastModifiedDate: string;
    date: string;
    updateDate: string;
    notes: string;
}

export interface StudentNotesPost {
    studentId: string;
    date: string;
}

export interface StudentTrackStateGet {
    studentId: string;
}
export const StudentTrackStateGetSchema: Schema = {
    type: 'object',
    properties: {
        studentId: { type: 'string', required: true },
    }
}

export interface StudentTrackStateGetResponse {
    behaviorStates:
        {
            behaviorId: string,
            started: boolean,
            startDate: string
        }[];
}

export interface StudentTrackPut {
    studentId: string;
    behaviorId: string;
    date?: string;
}

export const StudentTrackPutSchema: Schema = {
    type: 'object',
    properties: {
        studentId: { type: 'string', required: true },
        behaviorId: { type: 'string', required: true },
        date: { type: 'string', format: 'date-time' }
    }
}

export interface StudentDashboardPutRequest extends StudentDashboardSettings {
    studentId: string;
}

export interface StudentDataExcludeRequest {
    studentId: string;
    date: string;
    action: 'exclude' | 'include' | 'undo';
}

export interface StudentReportPostRequest {
    studentId: string;
    date: string;
}
export const StudentReportPostRequestSchema: Schema = {
    type: 'object',
    properties: {
        studentId: { type: 'string', required: true },
        date: { type: 'string', format: 'date', required: true }
    }
}