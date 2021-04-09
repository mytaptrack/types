import { TrackedTarget } from '../appTypes';

export interface AppRetrieveDataPostRequest {
    device: {
        id: string;
        name: string;
    };
    tokens: string[];
    notifications: {
        token: string;
        os: string;
    };
}

export interface AppRetrieveDataPostResponse {
    tokenUpdate: string;
    targets: TrackedTarget[];
}

export interface AppTrackDataPut {
    token: string;
    id: string;
    timezone: string;
}

export interface AppTrackDataResponse {
    token: string;
    id: string;
    durationOn?: boolean;
}

export interface GenerateQrCodeRequest {
    studentName: string;
    studentId: string;
    behaviorIds: string[];
    alertIds: string[];
    expires: number;
}
