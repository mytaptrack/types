import { StudentSummary } from '.';

export interface ServiceReportStudentData {
    serviceId: string;
    serviceName: string;
    currentBalance: number;
    measurementUnit: string;
    target: number;
    lastUpdateDate: number;
    mediation: string[];
}

export interface ServiceReportStudentSummary {
    studentId: string;
    studentName: string;
    weekly: ServiceReportStudentData[];
    balance: ServiceReportStudentData[];
}

export interface GlobalServiceReport {
    services: {
        serviceId: string;
        serviceName: string;
        serviceMinutes: number[];            
    }[];
    outOfComp: ServiceReportStudentSummary[];
    atRisk: ServiceReportStudentSummary[];
    students: ServiceReportStudentSummary[];
    schedule: {
        studentId: string;
        date: number;
        serviceId: string;
    }[];
}
