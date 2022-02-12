
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
    behaviors: ManageEfficacyDataBehavior[]
}

export interface EfficacyPostRequest {
    behaviorNames: string[];
    weeksTracked: number;
    startDate: string;
}
