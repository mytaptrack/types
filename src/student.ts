import { UserSummary } from './userDetails';
import { IoTDevice } from './iotDevice';
import { ActivityGroupDetails } from '.';

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
    subtext?: string;
    schedules?: ActivityGroupDetails[];
    milestones?: Milestone[];
}

export interface Milestone {
    date: string;
    title: string;
    description: string;
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
    administrator = 'Administrator',
    ABATherapist = 'ABA Therapist',
    BCBALABA = 'BCBA/LABA',
    ClassroomAide  = 'Classroom Aide',
    DistrictLEAAdmin = 'District/LEA Admin',
    EdAdvocate = 'Ed Advocate',
    HigherEdProfessor = 'Higher Ed Professor',
    InclusionFacilitator = 'Inclusion Facilitator',
    LCSWLICSW = 'LCSW/LICSW',
    OccupationalTherapist = 'Occupational Therapist',
    PersonalCareAideMedical = 'Personal Care Aide (medical)',
    PhysicalTherapist = 'Physical Therapist',
    Physician = 'Physician',
    PreServiceTeacherStudent = 'PreService Teacher/Student',
    Psychologist = 'Psychologist',
    RegularEdTeacher = 'Regular Ed Teacher',
    SchoolAdmin = 'School Admin',
    SchoolCommitteeBoardMember = 'School Committee/Board Member',
    SpecialEdTeacher = 'Special Ed Teacher',
    SPEDCoordinator = 'SPED Coordinator',
    SpeechTherapist = 'Speech Therapist',
    StateEdAgencyAdmin = 'State Ed Agency Admin',
    Other = 'Other'
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
