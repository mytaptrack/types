
export interface Notification<T extends NotificationDetails> {
    version: string;
    date: string;
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
}
