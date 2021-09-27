import { IoTDevice, UserSummary, StudentBehavior, LicenseDetails } from "..";

export interface ManageStudent {
    studentId: string;
    firstName: string;
    lastName: string;
    details: {
        behaviors: StudentBehavior[];
        responses: StudentBehavior[];
        users?: UserSummary[];
        devices?: IoTDevice[];    
    };
    licenseDetails: {
        fullYear: boolean;
        expiration: string;
    };
}

export interface ManageStudentGetResponse {
    students: ManageStudent[];
}
