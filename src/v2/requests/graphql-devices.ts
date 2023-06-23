export interface GraphQLAppBehaviorItem {
    id: string;
    abc?: boolean;
    order: number;
    name: string;
}

export interface GraphQLAppBehaviorItemInput {
    id: string;
    abc?: boolean;
    order: number;
}

export interface GraphQLAppServiceItem {
    id: string;
    order: number;
}

export interface GraphQLAppServiceItemInput {
    id: string;
    order: number;
}

export interface GraphQLAppStudent {
    studentId: string;
    studentName: string;
    groups: string[];
    behaviors: GraphQLAppBehaviorItem[];
    services: GraphQLAppServiceItem[];
}
export interface GraphQLAppStudentInput {
    studentId: string;
    studentName: string;
    groups: string[];
    behaviors: GraphQLAppBehaviorItemInput[];
    services: GraphQLAppServiceItemInput[];
}

export interface GraphQLApp {
    deviceId?: string;
    license: string;
    deviceName: string;
    textAlerts: boolean;
    timezone: string;
    students: GraphQLAppStudent[];
    qrExpiration?: number;
    tags?: string[];
}

export interface GraphQLAppInput {
    deviceId?: string;
    license: string;
    deviceName: string;
    textAlerts: boolean;
    timezone: string;
    students: GraphQLAppStudentInput[];
    qrExpiration?: number;
    tags?: string[];
    deleted?: boolean;
}

export interface GraphQLIoTClickerBehaviorItem {
    behaviorId: string;
    presses: number;
}

export interface GraphQLIoTClickerSwitchCommand {
    term: string;
    studentId: string;
}

export interface GraphQLIoTClicker {
    dsn: string;
    deviceName: string;
    validated: boolean;
    events: GraphQLIoTClickerBehaviorItem[];
    termSetup?: boolean;
    commands: GraphQLIoTClickerSwitchCommand[];
    timezone: string;
}

export interface GraphQLDeviceCollection {
    apps: GraphQLApp[];
    clickers: GraphQLIoTClicker[];
}
