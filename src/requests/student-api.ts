import { Activity, StudentBehavior, TeamRole, UserSummaryRestrictions, ReportData } from '..';

export interface ActivityRequest {
    studentId: string;
    date: string;
    activity: Activity;
}

export interface StudentBehaviorDeleteRequest {
    behavior: string;
    studentId: string;
}

export interface StudentBehaviorGetRequest {
    behavior: string;
    studentId: string
}

export interface StudentBehaviorPutRequest {
    studentId: string;
    behavior: StudentBehavior;
}

export interface DeleteDeviceRequest {
    dsn: string;
    studentId: string;
}

export interface DevicePostRequest {
    dsn: string;
}

export interface DevicePutRequest {
    dsn: string;
    name: string;
    studentId: string;
    enterpriseId: string;
    events: DevicePutRequestEvent[];
}

export interface DevicePutRequestEvent {
    eventId: string;
    presses: number | string;
    delayDelivery: string;
}

export interface StudentCreateRequest {
    role: TeamRole;
    firstName: string;
    lastName: string;
    schoolDistrict: string;
    allowContactSchool: boolean;
    teacher: string;
    studentId: string;
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
};

export interface TeamPostRequest {
    studentId: string;
    inviteDate: string;
    accepted: boolean;
}

export interface TeamPutRequest {
    studentId: string;
    email: string;
    role: TeamRole;
    restrictions: UserSummaryRestrictions;
}
