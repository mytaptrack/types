import { ActivityGroupDetails, StudentDashboardSettings, LicenseFeatures, AbcCollection, MeasurementPeriod, Measurement, ScheduleCategory } from '.';
import { UserSummaryRestrictions } from './notifications';
import { Schema } from 'jsonschema';

export interface LicenseSummary {
    fullYear: boolean;
    flexible: boolean;
    transferable?: boolean;
    expiration: string;
    features: LicenseFeatures;
    services?: boolean;
    schoolYear?: {
        start: string;
        end: string;
    }
}

export interface StudentDocument {
    id: string;
    name: string;
    timerange: {
        start: number;
    };
    size: number;
    uploadDate: number;
    complete: boolean;
}

export interface StudentAbsence {
    start: number;
    end: number;
    note: string;
}

export interface Student {
    studentId: string;
    schoolStudentId?: string;
    license?: string;
    licenseDetails?: LicenseSummary;
    details: StudentDetails;
    behaviors: StudentBehavior[];
    responses: StudentResponse[];
    documents: StudentDocument[];
    services: StudentService[];
    restrictions: UserSummaryRestrictions;
    scheduleCategoriess?: ScheduleCategory[];
    milestones: Milestone[];
    abc?: AbcCollection;
    dashboard?: StudentDashboardSettings;
    version: number;
    lastTracked: string;
    lastUpdateDate: string;
    archived?: boolean;
    tags: string[];
    partial?: boolean;
    absences: StudentAbsence[];
}

export interface StudentResponseSetting {
    behaviorId: string;
    stopDuration: boolean;
}

export interface Milestone {
    date: string;
    title: string;
    description?: string;
}

export const MilestoneSchema: Schema = {
    type: 'object',
    properties: {
        date: {
            type: 'string',
            format: 'date',
            required: true
        },
        title: { type: 'string', required: true},
        description: { type: 'string' }
    }
};

export enum MeasurementType {
    event = 'Event',
    avg = 'Avg',
    sum = 'Sum',
    max = 'Max',
    min = 'Min'
}

export const StudentBehaviorTargetMax = 30000;
export const StudentBehaviorTargetMin = 0;

export interface StudentBehavior {
    id?: string;
    name: string;
    abbreviation?: string;
    isArchived?: boolean;
    isDuration?: boolean;
    managed?: boolean;
    desc?: string;
    daytime?: boolean;
    baseline?: boolean;
    trackAbc?: boolean;
    requireResponse?: boolean;
    targets?: {
        targetType: string;
        target: number;
        progress?: number;
        measurements: {
            name: string;
            value: number;
        }[];
        measurement: MeasurementType;
    }[];
    tags: string[];
}

export interface StudentService {
    id: string;
    name: string;
    desc: string;
    isArchived?: boolean;
    isDuration?: boolean;

    durationRounding: number;
    target: number;
    detailedTargets: StudentServiceMinuteDetailedTarget[];
    goals: StudentServiceGoals;
    modifications: string[];

    startDate: number;
    endDate: number;
}

export interface StudentServiceGoalTarget {
    name: string;
    startAt: number;
    goal: number;
}
export interface StudentServiceGoals {
    trackGoalPercent: boolean;
    goalTargets: StudentServiceGoalTarget[];
}


export enum ScheduleItemType {
    Scheduled = 'Scheduled',
    Makeup = 'Makeup'
}

export interface StudentServiceMinuteDetailedTarget {
    date: number;
    target: number;
    groupId: number;
    type: ScheduleItemType;
}

export interface StudentBehaviorEdit extends StudentBehavior {
    editMode: boolean;
    oldData: string;
}

export interface StudentResponse extends StudentBehavior {
}

export interface StudentDetails {
    firstName: string;
    lastName: string;
    nickname?: string;
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

    return TeamRole.Other;
}

export interface StudentSummaryReportBehaviorTarget {
    target: number;
    progress?: number;
    measurement: MeasurementType;
    measurements: {
        name: string;
        value: number
    }[];
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
    targets?: {
        frequency?: StudentSummaryReportBehaviorTarget;
        sum?: StudentSummaryReportBehaviorTarget;
        avg?: StudentSummaryReportBehaviorTarget;
        max?: StudentSummaryReportBehaviorTarget;
        min?: StudentSummaryReportBehaviorTarget;
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

export const StudentSummaryReportBehaviorSchema: Schema = {
    type: 'object',
    properties: {
        show: { type: 'boolean', required: true },
        behaviorId: { type: 'string', required: true },
        isDuration: { type: 'boolean', required: true },
        displayText: { type: 'string' },
        faces: {
            type: 'list',
            items: [
                {
                    type: 'object',
                    properties: {
                        face: { type: 'string', required: true },
                        overwrite: { type: 'boolean' }
                    }
                }
            ]
        },
        targets: { },
        stats: {
            type: 'object',
            properties: {
                week: {
                    type: 'object',
                    properties: {
                        count: { type: 'number' },
                        delta: { type: 'number' },
                        modifier: { type: 'string' }
                    }
                },
                day: {
                    type: 'object',
                    properties: {
                        count: { type: 'number', required: true },
                        delta: { type: 'number', required: true },
                        modifier: { type: 'string', required: true },
                    }
                }
            }
        }
    }
}

export interface StudentSummaryReportLegend {
    behavior: string;
    measurement: MeasurementType;
    target: number;
    progress: number;
    measurements: {
        name: string;
        value: number;
        color: string;
        order: number;
    }[];
}
export const StudentSummaryReportLegendSchema: Schema = {
    type: 'object',
    properties: {
        behavior: { type: 'string', required: true },
        measurement: { type: 'string', required: true},
        target: { type: 'number', required: true },
        progress: { type: 'number', required: true }
    }
}

export interface StudentSummaryReport {
    studentId: string;
    lastModified: {
        userId: string;
        date: string;
    };
    message: Record<string, any>;
    date: string;
    type: 'Weekly';
    behaviors: StudentSummaryReportBehavior[];
    legend?: StudentSummaryReportLegend[];
    version: number;
}

export const StudentSummaryReportSchema: Schema = {
    type: 'object',
    properties: {
        studentId: { type: 'string', required: true },
        date: { type: 'string', format: 'date', required: true },
        behaviors: {
            type: 'list',
            items: [ StudentSummaryReportBehaviorSchema ],
            required: true
        },
        lastModified: {
            type: 'object',
            properties: {
                userId: { type: 'string', required: true },
                date: { type: 'string', required: true }
            }
        },
        message: {},
        type: { type: 'string', required: true },
        legend: {
            type: 'list',
            items: [ StudentSummaryReportLegendSchema ]
        },
        version: { type: 'number' }
    }
}