import { Schema } from "jsonschema";
import { AbcCollection } from ".";

export interface TrackedBehavior {
    title: string;
    id: string;
    isDuration: boolean;
    durationOn?: boolean;
    track: boolean;
    abc: boolean;
    order: number;
    managed?: boolean;
}

export interface TrackedTarget {
    token: string;
    name: string;
    groups: string[];
    textAlerts?: boolean;
    abc: AbcCollection;
    behaviors: TrackedBehavior[];
}

export interface MobileDeviceRegistration {
    studentId: string;
    id: string;
    name: string;
    behaviors: TrackedBehavior[];
    groups: string[];
    timezone: string;
}

export interface MobileDevice {
    appId: string;
    device: {
        id: string;
        name: string;
    };
    assignments: MobileDeviceRegistration[];
    tags: string[];
}

export interface LicenseAppRef {
    id?: string;
    name: string;
    deviceId?: string;
    license: string;
    studentApps: { appId: string, studentId: string}[];
    tags: string[];
    version: number;
}

export const LicenseAppRefSchema: Schema = {
    type: "object",
    properties: {
        id: { type: "string" },
        name: { type: "string", required: true },
        deviceId: { type: "string" },
        license: { type: "string", required: true },
        studentApps: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    appId: { type: "string", required: true },
                    studentId: { type: "string", required: true },
                }
            },
            required: true
        },
        tags: {
            type: "array",
            items: { type: "string" },
            required: true
        },
        version: { type: "number", required: true }
    }
};
