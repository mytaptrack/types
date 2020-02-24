export interface Activity {
    startTime: Date | string;
    endTime: Date | string;
    title: string;
    comments?: string;
    id?: string;
    timezone?: string;
}

export interface ActivityGroup {
    userId: string;
    id: string;
    details: ActivityGroupDetails;
    version: number;
}

export interface ActivityGroupDetails {
    activities: Activity[];
    name: string;
    applyDays: number[];
    startDate?: string;
    deleted?: boolean;
}

export interface ActivityGroupSummary {
    id: string;
    name: string;
}
