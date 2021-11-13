import { StudentTemplateBehavior, TrackTemplateBehavior } from '..';

export interface ManageAppRenamePostRequest {
    deviceId: string;
    fromName: string;
    toName: string;
    tags: string[];
}

export interface ManageStudentTemplatePostRequest {
    tag: string;
    behaviors: StudentTemplateBehavior[];
}

export interface ManageDeviceTemplatePostRequest {
    tag: string;
    behaviors: TrackTemplateBehavior[];
}
