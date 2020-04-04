export interface Notification<T extends NotificationDetails> {
    version: string;
    date: number;
    email: string;
    studentId?: string;
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

export interface UserSummaryRestrictions {
    data: AccessLevel;
    schedules: AccessLevel;
    devices: AccessLevel;
    team: AccessLevel;
    comments: AccessLevel;
    behavior: AccessLevel;
    behaviors?: string[];
}
