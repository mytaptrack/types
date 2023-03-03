import { Activity } from './index';

export interface ReportDetails {
    data: Array<ReportData>;
    startMillis: number;
    schedules: {
        [date: string]: string;
    };
    lastUpdateDate: number;
    excludeDays: string[];
    includeDays: string[];
    excludedIntervals: string[];
    version: number;
}

export interface ReportData {
    dateEpoc: number;
    behavior: string;
    reported?: boolean;
    score?: number;
    isManual: boolean;
    source?: {
        device: string;
        rater?: string;
    };
    deleted?: {
        date: string;
        by: string
    };
    abc?: {
        a: string;
        c: string;
    }
}

export interface DeviceReports {
    studentReport: ReportDetails;
    behaviorReport: ReportDetails;
}
