export interface Activity {
    startTime: Date | string;
    endTime: Date | string;
    title: string;
    comments?: string;
    id?: string;
    timezone?: string;
}

export interface ActivityGroup {
    activities: Activity[];
    name: string;
    id: string;
}
