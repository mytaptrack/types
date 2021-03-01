import { TrackedTarget } from '../appTypes';

export interface AppRetrieveDataPostRequest {
    device: {
        id: string;
        name: string;
    },
    tokens: string[];
}

export interface AppRetrieveDataPostResponse {
    tokenUpdate: string,
    targets: TrackedTarget[];
}

export interface AppTrackDataPut {
    token: string;
    id: string;
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
}