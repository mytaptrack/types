
export interface ManageEfficacyDataPoint {
    offset: number;
    count: number;
}
export interface ManageEfficacyDataBehavior {
    behaviorId: string;
    data: ManageEfficacyDataPoint[];
}
export interface ManageEfficacyPostResponse {
    summary: ManageEfficacyDataPoint[];
    behaviors: ManageEfficacyDataBehavior[];
}

export interface EfficacyPostRequest {
    behaviorNames: string[];
    weeksTracked: number;
    startDate: string;
}

export interface ManageTrackingDataPoint {
    date: string;
    count: number;
}
export interface ManageTrackingDataBehavior {
    studentId: string;
    data: ManageTrackingDataPoint[];
}

export interface ManagedTrackingPostRequest {
    behaviorNames: string[];
    startDate: string;
    endDate: string;
}

export interface ManagedTrackingPostResponse {
    eventCount: ManageTrackingDataPoint[];
    studentCount: ManageTrackingDataPoint[];
    students: ManageTrackingDataBehavior[];
}
