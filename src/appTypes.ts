export interface TrackedBehavior {
    title: string;
    id: string;
    isDuration: boolean;
    durationOn?: boolean;
    alert: boolean;
}

export interface TrackedTarget {
    token: string;
    name: string;
    behaviors: TrackedBehavior[];
}