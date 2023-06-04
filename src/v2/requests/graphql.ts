import { Measurement, MeasurementPeriod } from "..";

export interface QLUser {
    id: string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    terms: string | undefined;
}

export interface QLTag {
    tag: string | undefined;
    type: string | undefined;
}

export interface QLDeleteDetails {
    date: string | undefined;
    by: string | undefined;
}

export interface QLStudentDetails {
    firstName: string;
    lastName: string;
    nickname?: string;
    tags?: QLTag[];
}

export interface QLStudentSummary {
    studentId: string | undefined;
    details: QLStudentDetails | undefined;
    lastTracked: string | undefined;
}

export interface QLLicenseSummary {
    fullYear: boolean | undefined;
    flexible: boolean | undefined;
    services: boolean;
    transferable: boolean;
    expiration: string | undefined;
}

export interface QLMilestone {
    date: string | undefined;
    description: string | undefined;
    title: string | undefined;
}

export interface QLTrackableTargetMeasurement {
    name: string | undefined;
    value: number | undefined;
}

export interface QLTrackableTarget {
    measurement: string | undefined;
    measurements: QLTrackableTargetMeasurement[] | undefined;
    progress: number | undefined;
    target: number | undefined;
    targetType: string | undefined;
}

export interface QLTrackable {
    daytime: boolean;
    id: string;
    name: string;
    description?: string;
    isArchived: boolean;
    isDuration: boolean;
    targets: QLTrackableTarget[];
    baseline?: boolean;
    managed?: boolean;
    requireResponse?: boolean;
    tags: QLTag[];
}

export interface QLService {
    // Add service fields here
}

export interface QLAbcCollection {
    // Add ABC collection fields here
}

export interface QLStudentDocument {
    id: string;
    name: string;
    timerange: {
        start: number;
    };
    size: number;
    uploadDate: number;
    complete: boolean;
}

export interface QLStudent {
    studentId?: string;
    license?: string;
    licenseDetails?: QLLicenseSummary;
    schoolStudentId?: string;
    details: QLStudentDetails;
    lastTracked?: string;
    lastUpdateDate?: string;
    archived?: boolean;
    milestones?: QLMilestone[];
    abc?: QLAbcCollection;
    behaviors?: QLTrackable[];
    responses?: QLTrackable[];
    services?: QLService[];
    documents?: QLStudentDocument[];
    futureExclusions?: number[];
}

export interface QLStudentUpdateLicenseInput {
    fullYear: boolean | undefined;
    flexible: boolean | undefined;
    services: boolean;
    transferable: boolean;
}

export interface QLStudentUpdateInput {
    studentId?: string;
    license: string;
    licenseDetails?: QLStudentUpdateLicenseInput;
    schoolStudentId?: string;
    details?: QLStudentDetails;
    archived?: boolean;

    milestones?: QLMilestone[];
    abc?: QLAbcCollection;
    behaviors?: QLTrackable[];
    responses?: QLTrackable[];
    services?: QLServiceInput[];
    futureExclusions?: number[];
}

export interface QLTrackTemplateBehavior {
    name: string;
    desc?: string;
    track?: boolean;
    abc?: boolean;
    order: number;
}

export interface QLTrackTemplateBehaviorInput {
    name: string;
    desc?: string;
    track?: boolean;
    abc?: boolean;
    order: number;
}

export interface QLStudentTemplateBehavior {
    name: string;
    desc?: string;
    isDuration?: boolean;
    daytime?: boolean;
    baseline?: boolean;
    targets: QLStudentTemplateBehaviorTarget[];
}

export interface QLStudentTemplateBehaviorInput {
    name: string;
    desc?: string;
    isDuration?: boolean;
    daytime?: boolean;
    baseline?: boolean;
    targets: QLStudentTemplateBehaviorTargetInput[];
}

export interface QLStudentTemplateBehaviorTarget {
    targetType: string;
    target: number;
    progress?: number;
    measurements: QLStudentTemplateBehaviorMeasurement[];
    measurement?: QLMeasurementType;
}

export interface QLStudentTemplateBehaviorTargetInput {
    targetType: string;
    target: number;
    progress?: number;
    measurements: QLStudentTemplateBehaviorMeasurementInput[];
    measurement?: QLMeasurementType;
}

export interface QLStudentTemplateBehaviorMeasurement {
    name: string;
    value: number;
}

export interface QLStudentTemplateBehaviorMeasurementInput {
    name: string;
    value: number;
}

export enum QLMeasurementType {
    Event = "Event",
    Avg = "Avg",
    Sum = "Sum",
    Max = "Max",
    Min = "Min",
}

export interface QLLicenseStudentTemplate {
    name: string;
    desc?: string;
    behaviors: QLStudentTemplateBehavior[];
    responses: QLStudentTemplateBehavior[];
    appTemplates: QLLicenseAppTemplate[];
    tags: string[];
}

export interface QLLicenseStudentTemplateInput {
    name: string;
    desc?: string;
    behaviors: QLStudentTemplateBehaviorInput[];
    responses: QLStudentTemplateBehaviorInput[];
    appTemplates: QLLicenseAppTemplateInput[];
    tags: string[];
}

export interface QLLicenseAppTemplate {
    name: string;
    desc?: string;
    events: QLTrackTemplateBehavior[];
    tags: string[];
    parentTemplate?: string;
}

export interface QLLicenseAppTemplateInput {
    name: string;
    desc?: string;
    events: QLTrackTemplateBehaviorInput[];
    tags: string[];
    parentTemplate?: string;
}

export interface QLServicesInput {
    services: QLServiceInput[];
}

export interface QLServiceInputDetailedTarget {
    day?: number;
    target?: number;
}

export interface QLService {
    id: string;
    name: string;
    startDate: number;
    description?: string;
    measurementUnit?: Measurement;
    period: MeasurementPeriod;
    durationRounding?: number;
    isDuration?: boolean;
    isArchived?: boolean;
    target?: number;
    detailedTargets?: QLServiceDetailedTarget[];
    currentBalance?: number;
    lastUpdateDate?: number;
}

export interface QLServiceDetailedTarget {
    day?: number;
    target?: number;
}

export interface QLServiceReportStudentData {
    serviceId: string;
    serviceName: string;
    currentBalance?: number;
    measurementUnit?: Measurement;
    target?: number;
    lastUpdateDate?: number;
}

export interface QLServiceReportStudentSummary {
    studentId: string;
    studentName: string;
    weekly?: QLServiceReportStudentData[];
    balance?: QLServiceReportStudentData[];
}

export interface QLGlobalServiceReport {
    serviceId: string;
    serviceName: string;
    serviceMinutes?: number[];
}


export interface QLGlobalServicesReportSchedule {
    serviceId: string;
    date: number;
    studentId: string;
}

export interface QLGlobalServicesReport {
    services?: QLGlobalServiceReport[];
    outOfComp?: QLServiceReportStudentSummary[];
    atRisk?: QLServiceReportStudentSummary[];
    students?: QLServiceReportStudentSummary[];
    schedule?: QLGlobalServicesReportSchedule[];
}

export interface QLReportDataSource {
    device: string;
    rater: string;
}

export interface QLReportDataAbc {
    a: string;
    c: string;
}

export interface QLReportData {
    dateEpoc: number;
    behavior: string;
    reported: boolean;
    score?: number;
    isManual?: boolean;
    source: QLReportDataSource;
    deleted?: QLDeleteDetails;
    abc?: QLReportDataAbc;
}

export interface QLReportDetailsSchedule {
    date: string;
    schedule: string;
}

export interface QLReportDetails {
    data: QLReportData[];
    startMillis: number;
    schedules?: QLReportDetailsSchedule[];
    excludeDays?:

 string[];
    includeDays?: string[];
    excludedIntervals?: string[];
}

export interface QLSnapshotConfigMeasurement {
    name: string;
    order: number;
}

export interface QLSnapshotConfigMeasurementInput {
    name: string;
    order: number;
}

export interface QLSnapshotConfig {
    low: string;
    medium: string;
    high: string;
    measurements: QLSnapshotConfigMeasurement[];
}

export interface QLSnapshotConfigInput {
    low: string;
    medium: string;
    high: string;
    measurements: QLSnapshotConfigMeasurementInput[];
}

export interface QLLicenseDisplayTags {
    order: number;
    tagName: string;
}

export interface QLLicenseDisplayTagsInput {
    order: number;
    tagName: string;
}

export interface QLLicenseFeatures {
    snapshot: boolean;
    snapshotConfig?: QLSnapshotConfig;
    dashboard: boolean;
    browserTracking: boolean;
    download: boolean;
    manage: boolean;
    supportChanges: boolean;
    schedule: boolean;
    devices: boolean;
    behaviorTargets: boolean;
    response: boolean;
    emailTextNotifications: boolean;
    manageStudentTemplates?: boolean;
    manageResponses?: boolean;
    abc: boolean;
    notifications: boolean;
    appGroups: boolean;
    documents: boolean;
    intervalWBaseline: boolean;
    displayTags?: QLLicenseDisplayTags[];
}

export interface QLLicenseFeaturesInput {
    snapshot: boolean;
    snapshotConfig?: QLSnapshotConfigInput;
    dashboard: boolean;
    browserTracking: boolean;
    download: boolean;
    manage: boolean;
    supportChanges: boolean;
    schedule: boolean;
    devices: boolean;
    behaviorTargets: boolean;
    response: boolean;
    emailTextNotifications: boolean;
    manageStudentTemplates?: boolean;
    manageResponses?: boolean;
    abc: boolean;
    notifications: boolean;
    appGroups: boolean;
    documents: boolean;
    intervalWBaseline: boolean;
    displayTags?: QLLicenseDisplayTagsInput[];
}

export interface QLLicenseTagSet {
    name: string;
    tags: string[];
}

export interface QLLicenseTagSetInput {
    name: string;
    tags: string[];
}

export interface QLAbcCollection {
    name: string;
    tags: string[];
    antecedents: string[];
    consequences: string[];
    overwrite?: boolean;
}

export interface QLAbcCollectionInput {
    name: string;
    tags: string[];
    antecedents: string[];
    consequences: string[];
    overwrite: boolean;
}

export interface QLLicenseDetails {
    license?: string;
    customer: string;
    singleCount: number;
    singleUsed: number;
    multiCount: number;
    admins: string[];
    emailDomain?: string;
    expiration: string;
    mobileTemplates: QLLicenseAppTemplate[];
    studentTemplates: QLLicenseStudentTemplate[];
    features: QLLicenseFeatures;
    abcCollections: QLAbcCollection[];
    tags: QLLicenseTags;
}

export interface QLLicenseDetailsInput {
    license?: string;
    customer: string;
    singleCount: number;
    multiCount: number;
    admins: string[];
    emailDomain?: string;
    expiration: string;
    mobileTemplates: QLLicenseAppTemplateInput[];
    studentTemplates: QLLicenseStudentTemplateInput[];
    features?: QLLicenseFeaturesInput;
    abcCollections: QLAbcCollectionInput[];
    tags: QLLicenseTagsInput;
}

export interface QLLicenseTags {
    devices: QLLicenseTagSet[];
}

export interface QLLicenseTagsInput {
    devices: QLLicenseTagSetInput[];
}

export interface QLLicenseDetailsWithUsage {
    license?: string;
    customer: string;
    singleCount

: number;
    singleUsed: number;
    multiCount: number;
    admins: string[];
    emailDomain: string;
    expiration: string;
    mobileTemplates: QLLicenseAppTemplate[];
    studentTemplates: QLLicenseStudentTemplate[];
    features: QLLicenseFeatures;
    abcCollections: QLAbcCollection[];
    tags: QLLicenseTags;
    usage: QLLicenseUsage[];
}

export interface QLLicenseUsage {
    month: string;
    trackedEvents: number;
    studentsTracked: number;
}

export interface QLManageStatRow {
    single: number;
    flexible: QLManageStatRow[];
}

export interface QLLicenseStats {
    stats: QLManageStatRow;
}

export interface QLLicenseDisplayTagsPutInput {
    license: string;
    displayTags: QLLicenseDisplayTagsInput[];
}

export interface QLReportDataSource {
    device: string;
    rater: string;
}

export interface QLReportDataAbc {
    a: string;
    c: string;
}

export interface QLReportData {
    dateEpoc: number;
    behavior: string;
    reported: boolean;
    score?: number;
    isManual?: boolean;
    source: QLReportDataSource;
    deleted?: QLDeleteDetails;
    abc?: QLReportDataAbc;
}

export interface QLReportDetailsSchedule {
    date: string;
    schedule: string;
}

export interface QLReportDetails {
    data: QLReportData[];
    startMillis: number;
    schedules?: QLReportDetailsSchedule[];
    excludeDays?: string[];
    includeDays?: string[];
    excludedIntervals?: string[];
}

export interface QLServicesInput {
    services: QLServiceInput[];
}

export interface QLServiceInput {
    id: string;
    name: string;
    description?: string;
    durationRounding?: number;
    target?: number;
    detailedTargets?: QLServiceInputDetailedTarget[];
    startDate: number;
    endDate: number;
    measurementUnit: Measurement;
    period: MeasurementPeriod;
    isArchived: boolean;
}

export interface QLServiceInputDetailedTarget {
    day?: number;
    target?: number;
}

export interface QLService {
    id: string;
    name: string;
    startDate: number;
    description?: string;
    measurementUnit?: Measurement;
    durationRounding?: number;
    isDuration?: boolean;
    isArchived?: boolean;
    target?: number;
    detailedTargets?: QLServiceDetailedTarget[];
    currentBalance?: number;
    lastUpdateDate?: number;
}

export interface QLServiceDetailedTarget {
    day?: number;
    target?: number;
}

export interface QLServiceReportStudentData {
    serviceId: string;
    serviceName: string;
    currentBalance?: number;
    measurementUnit?: Measurement;
    target?: number;
    lastUpdateDate?: number;
}

export interface QLServiceReportStudentSummary {
    studentId: string;
    studentName: string;
    weekly?: QLServiceReportStudentData[];
    balance?: QLServiceReportStudentData[];
}

export interface QLGlobalServiceReport {
    serviceId: string;
    serviceName: string;
    serviceMinutes?: number[];
}

export interface QLGlobalServicesReport {
    services?: QLGlobalServiceReport[];
    outOfComp?: QLServiceReportStudentSummary[];
    atRisk?: QLServiceReportStudentSummary[];
    students?: QLServiceReportStudentSummary[];
    schedule?: QLGlobalServicesReportSchedule[];
}

export interface QLTrackTemplateBehavior {
    name: string;
    desc?: string;
    track?: boolean;
    abc?: boolean;
    order: number;
}

export interface QLTrackTemplateBehaviorInput {
    name: string;
    desc?: string;
    track?: boolean;
    abc?: boolean;
    order: number;
}

export interface QLStudentTemplateBehavior {
    name: string;
    desc?: string;
    isDuration?: boolean;
    daytime?: boolean;
    baseline?: boolean;
    targets: QLStudentTemplateBehaviorTarget[];
}

export interface QLStudentTemplateBehaviorInput {
    name: string;
    desc?: string;
    isDuration?: boolean;
    daytime?: boolean;
    baseline?: boolean;
    targets: QLStudentTemplateBehaviorTargetInput[];
}

export interface QLStudentTemplateBehaviorTarget {
    targetType: string;
    target: number;
    progress?: number;
    measurements: QLStudentTemplateBehaviorMeasurement[];
    measurement?: QLMeasurementType;
}

export interface QLStudentTemplateBehaviorTargetInput {
    targetType: string;
    target: number;
    progress?: number;
    measurements: QLStudentTemplateBehaviorMeasurementInput[];
    measurement?: QLMeasurementType;
}

export interface QLStudentTemplateBehaviorMeasurement {
    name: string;
    value: number;
}

export interface QLStudentTemplateBehaviorMeasurementInput {
    name: string;
    value: number;
}

export interface QLLicenseStudentTemplate {
    name: string;
    desc?: string;
    behaviors: QLStudentTemplateBehavior[];
    responses: QLStudentTemplateBehavior[];
    appTemplates: QLLicenseAppTemplate[];
    tags: string[];
}

export interface QLLicenseStudentTemplateInput {
    name: string;
    desc?: string;
    behaviors: QLStudentTemplateBehaviorInput[];
    responses: QLStudentTemplateBehaviorInput[];
    appTemplates: QLLicenseAppTemplateInput[];
    tags: string[];
}

export interface QLLicenseAppTemplate {
    name: string;
    desc?: string;
    events: QLTrackTemplateBehavior[];
    tags: string[];
    parentTemplate?: string;
}

export interface QLLicenseAppTemplateInput {
    name: string;
    desc?: string;
    events: QLTrackTemplateBehaviorInput[];
    tags: string[];
    parentTemplate?: string;
}