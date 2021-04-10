export interface TrackedBehavior {
    title: string;
    id: string;
    isDuration: boolean;
    durationOn?: boolean;
    alert: boolean;
    track: boolean;
    customMessage?: string;
}

export interface TrackedTarget {
    token: string;
    name: string;
    behaviors: TrackedBehavior[];
}
