import { MobileTemplate } from ".";

export interface TrackedBehavior {
    title: string;
    id: string;
    isDuration: boolean;
    durationOn?: boolean;
    alert: boolean;
    track: boolean;
    customMessage?: string;
    order: number;
}

export interface TrackedTarget {
    token: string;
    name: string;
    behaviors: TrackedBehavior[];
}

export interface MobileDeviceRegistration {
    studentId: string;
    id: string;
    name: string;
    deviceName: string;
    behaviors: TrackedBehavior[];
    hasBeenClaimed: boolean;
}

export interface MobileDevice {
    device: {
        id: string;
        name: string;
    };
    assignments: MobileDeviceRegistration[];
    template: MobileTemplate;
}