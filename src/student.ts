import { UserSummary } from './userDetails';
import { IoTDevice } from './iotDevice';

export interface Student {
    details: StudentDetails;
    studentId: string;
    version: number;
}

export interface StudentDetails {
    behaviors: Array<StudentBehavior>;
    users?: Array<UserSummary>;
    devices?: Array<IoTDevice>;
    firstName: string;
    lastName: string;
    schoolDistrict: string;
    teacher: string;
    allowContactSchool: boolean;
}

export interface StudentBehavior {
    id?: string;
    name: string;
    isArchived?: boolean;
    isDuration?: boolean;
}

export interface StudentBehaviorEdit extends StudentBehavior {
    editMode: boolean;
    oldData: string;
}

export interface BehaviorSubscription {
    studentId: string;
    behaviorId: string;
    onEach: boolean;
    email?: boolean;
    mobile?: boolean;
}

export enum TeamRole {
    parent = 'Parent',
    teacher = 'Teacher',
    doctor = 'Doctor',
    administrator = 'Administrator'
}

export function ConvertToRole(input: string): TeamRole {
    if (input === TeamRole.administrator.toString()) {
        return TeamRole.administrator;
    }
    if (input === TeamRole.doctor.toString()) {
        return TeamRole.doctor;
    }
    if (input === TeamRole.parent.toString()) {
        return TeamRole.parent;
    }
    if (input === TeamRole.teacher.toString()) {
        return TeamRole.teacher;
    }

    return null;
}
