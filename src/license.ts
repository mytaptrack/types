export interface LicenseDetails {
    license?: string;
    customer: string;
    singleCount: number;
    /**
     * An array of student ids
     */
    singleUsed: string[];
    multiCount: number;
    admins: string[];
    expiration: string;
}
