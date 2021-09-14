import { UserSummary } from './userDetails';
import { IoTDevice } from './iotDevice';
import { ActivityGroupDetails, StudentDashboardSettings } from '.';

export interface Student {
    details: StudentDetails;
    studentId: string;
    license?: string;
    licenseDetails?: {
        fullYear: boolean;
        expiration: string;
    };
    dashboard?: StudentDashboardSettings;
    version: number;
    lastUpdateDate: string;
}

export interface StudentResponseSetting {
    behaviorId: string;
    stopDuration: boolean;
}

export interface StudentResponse extends StudentBehavior {
    appliedToBehaviors: StudentResponseSetting[];
}

export interface StudentDetails {
    behaviors: StudentBehavior[];
    responses: StudentResponse[];
    users?: UserSummary[];
    devices?: IoTDevice[];
    firstName: string;
    lastName: string;
    schoolDistrict: string;
    teacher: string;
    allowContactSchool: boolean;
    subtext?: string;
    schedules?: ActivityGroupDetails[];
    milestones: Milestone[];
}

export interface Milestone {
    date: string;
    title: string;
    description: string;
}

export enum MeasurementType {
    event = 'Event',
    avg = 'Avg',
    sum = 'Sum',
    max = 'Max',
    min = 'Min'
}

export interface StudentBehavior {
    id?: string;
    name: string;
    isArchived?: boolean;
    isDuration?: boolean;
    desc?: string;
    daytime?: boolean;
    requireResponse?: boolean;
    targets?: { 
        [targetType: string]: { 
            target: number;
            progress?: number;
            measurement: MeasurementType;
        }
    };
}

export interface StudentBehaviorEdit extends StudentBehavior {
    editMode: boolean;
    oldData: string;
}

export interface BehaviorSubscription {
    studentId: string;
    behaviorId: string;
    onEach: boolean;
    dashboard?: boolean;
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

export interface StudentSummaryReportBehavior {
    show: boolean;
    behaviorId: string;
    isDuration?: boolean;
    displayText: string;
    faces: {
        face: string;
        overwrite?: boolean
    }[];
    targets: {
        [targetType: string]: {
        target: number;
        progress?: number;
        measurement: MeasurementType;
        };
    };
    stats?: {
        week: {
        count: number;
        delta: number;
        modifier: string;
        };
        day: {
        count: number;
        delta: number;
        modifier: string;
        };
    };
}

export interface StudentSummaryReportLegend {
    behavior: string;
    measurement: MeasurementType;
    target: number;
    progress: number;
}

export interface StudentSummaryReport {
    studentId: string;
    lastModified: {
        userId: string;
        date: string;
    }
    message: Record<string, any>;
    date: string;
    type: 'Weekly';
    behaviors: StudentSummaryReportBehavior[];
    legend?: StudentSummaryReportLegend[];
    version: number;
}