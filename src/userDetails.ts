import { BehaviorSubscription, Notification, NotificationDetails, ActivityGroupSummary, UserSummaryRestrictions } from './index';
import { TeamRole } from './student';

export interface User {
    notifications: UserNotifications;
    details: UserDetails;
    terms: string;
    userId: string;
    enterpriseId: string;
    dashboard: {
        [studentId: string]: BehaviorSettings[];
    };
    notifyCounts: {
        [student: string]: number;
    };
    version: number;
}

export interface UserNotifications {
    [studentId: string]: Notification<NotificationDetails>[];
}

export const USER_VERSION = 5;

export interface UserDetails {
    email: string;
    firstName: string;
    lastName: string;
    name: string;
    state: string;
    zip: string;
    mobile: string;
    students: Array<StudentSummary>;
}

export interface BehaviorSettings {
    id: string;
    frequency: boolean;
    duration?: {
      sum: boolean;
      avg: boolean;
      max: boolean;
      min: boolean;
    };
  }

export interface StudentSummary {
    studentId: string;
    firstName: string;
    lastName: string;
    subtext?: string;
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
    occurence = 'occurence'
}

export interface ReportDefinitionMetric {
    id: string;
    timeline: ReportDefinitionTimeline;
    name: string;
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
    };
    enterpriseId?: string;
    studentId: string;
    version: number;
    smallImage?: string;
    restrictions?: UserSummaryRestrictions;
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
