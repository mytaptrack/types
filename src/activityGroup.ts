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
    applyDays: string[];
}

export interface ActivityGroupSummary {
    id: string;
    name: string;
}
