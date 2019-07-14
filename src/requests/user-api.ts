import { Activity, ReportDefinition, NotificationType, UserDetails } from '..';

export interface UserActivityGroupPutRequest {
    name: string;
    id: string;
    activities: Activity[];
}

export interface DeleteUserActivityGroupRequest {
    name: string;
    id: string;
}

export interface ReportDeleteRequest {
    id: string;
}

export interface ReportPostRequest {
    reportIds: string[];
}

export interface ReportSharePostRequest {
    email: string;
    report: ReportDefinition;
}

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
    type: NotificationType;
}

export interface UserPutRequest extends UserDetails {
    acceptTerms: boolean;
}
