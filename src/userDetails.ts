import { BehaviorSubscription, Notification, NotificationDetails, ActivityGroupSummary } from '.';
import { TeamRole } from './student';

export interface User {
    notifications: Array<Notification<NotificationDetails>>;
    details: UserDetails;
    terms: string;
    userId: string;
    enterpriseId: string;
    version: number;
}

export interface UserDetails {
    email: string;
    firstName: string;
    lastName: string;
    name: string;
    state: string;
    zip: string;
    behaviors: Array<Behavior>;
    reports: Array<ReportDefinition>;
    students: Array<StudentSummary>;
}

export interface StudentSummary {
    studentId: string;
    firstName: string;
    lastName: string;
}

export interface ReportDefinition {
    name: string;
    id?: string;
    studentId: string;
    style: ReportDefinitionStyle;
    metrics: Array<ReportDefinitionMetric>;
}

export interface ReportDefinitionMetric {
    id: string;
    timeline: ReportDefinitionTimeline;
    name: string;
    data: Array<any>;
    color: string;
}

export interface ReportDefinitionTimeline {
    startDate: string | Date;
    scope: string;
    duration: number;
}

export interface ReportDefinitionStyle {
    type: string;
    width: number;
    fill: boolean;
    colors: Array<string>;
}

export interface Behavior {
    id: string;
    name: string;
}

export interface UserSummary {
    userId: string;
    status: UserSummaryStatus;
    details: {
        email: string;
        name: string;
        role: TeamRole
        restrictions: UserSummaryRestrictions;
    };
    enterpriseId?: string;
    studentId: string;
    version: number;
    smallImage?: string;
}

export interface UserSummaryRestrictions {
    activities?: boolean;
    comments?: boolean;
    behaviors?: string[];
}

export enum UserSummaryStatus {
    Verified = 'Verified',
    RemovalPending = 'Removal Pending',
    PendingVerification = 'pending verification',
    PendingApproval = 'pending approval'
}

export interface UserPreferences {
    notifications: {
        onEvent: Array<string>;
        onChange: Array<string>;
    };
}

export interface UserSubscriptionResponse {
    userId: string;
    studentId: string;
    subscriptions: Array<BehaviorSubscription>;
}

export interface UserContext {
    activityGroups: Array<ActivityGroupSummary>;
}
