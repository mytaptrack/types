import { Activity } from '.';

export interface ReportResponse {
    available: ReportDetails;
    private?: ReportDetails;
}

export interface ReportDetails {
    data: Array<ReportData>;
    studentBehavior: string;
    weekStart: string;
    activities: {
        [key: string]: Activity[];
    };
    lastUpdateDate?: Date;
    enterpriseId?: string;
}

export interface ReportData {
    date: string;
    behavior: string;
    reported?: boolean;
    score?: number;
}

export interface DeviceReports {
    studentReport: ReportDetails;
    behaviorReport: ReportDetails;
}
