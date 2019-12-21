import { BehaviorSubscription, Notification, NotificationDetails, ActivityGroupSummary } from './index';
import { TeamRole } from './student';

export interface User {
    notifications: Array<Notification<NotificationDetails>>;
    reports: Array<ReportDefinition>;
    details: UserDetails;
    terms: string;
    userId: string;
    enterpriseId: string;
    version: number;
}

export const USER_VERSION = 4;

export interface UserDetails {
    email: string;
    firstName: string;
    lastName: string;
    name: string;
    state: string;
    zip: string;
    mobile: string;
    behaviors: Array<Behavior>;
    students: Array<StudentSummary>;
    reportNames: {
        [key: string]: string;
    };
}

export interface StudentSummary {
    studentId: string;
    firstName: string;
    lastName: string;
}

export interface ReportDefinition {
    id?: string;
    studentId: string;
    style: ReportDefinitionStyle;
    metrics: Array<ReportDefinitionMetric>;
}

export enum MetricType {
    min = 'min',
    max = 'max',
    sum = 'sum',
    avg = 'avg',
    occurance = 'occurance'
}

export interface ReportDefinitionMetric {
    id: string;
    timeline: ReportDefinitionTimeline;
    name: string;
    data: Array<any>;
    color: string;
    metricType?: MetricType;
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
