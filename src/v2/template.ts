import { Schema } from 'jsonschema';
import { MeasurementType } from '.';

export interface TrackTemplateBehavior {
    name: string;
    desc: string;
    track?: boolean;
    alert?: boolean;
    abc?: boolean;
    order: number;
}
export const TrackTemplateBehaviorSchema: Schema = {
    type: 'object',
    properties: {
        name: { type: 'string', required: true },
        desc: { type: 'string' },
        track: { type: 'boolean' },
        alert: { type: 'boolean' },
        abc: { type: 'boolean' },
        order: { type: 'number', required: true }
    }
};

export interface StudentTemplateBehavior {
    name: string;
    desc: string;
    isDuration?: boolean;
    order: number;
    requireResponse?: boolean;
    targets?: {
        targetType: string;
        target: number;
        progress?: number;
        measurement: MeasurementType;
    }[];
}
export const StudentTemplateBehaviorSchema: Schema = {
    type: 'object',
    properties: {
        name: { type: 'string', required: true },
        desc: { type: 'string' },
        isDuration: { type: 'boolean' },
        order: { type: 'number', required: true },
        requireResponse: { type: 'boolean' },
        targets: {
            type: 'list',
            items: [
                {
                    type: 'object',
                    properties: {
                        targetType: { type: 'string', required: true },
                        target: { type: 'number', required: true },
                        progress: { type: 'number' },
                        measurement: { type: 'string', oneOf: [{ enum: ['Event','Avg','Sum','Max','Min']}]}
                    }
                }
            ]
        }
    }
};

export interface LicenseTemplate<T> {
    type: 'app' | 'device' | 'student';
    name: string;
    desc: string;
    behaviors: T[];
    tags: string[];
}
export const LicenseTemplateSchema: Schema = {
    type: 'object',
    properties: {
        type: { type: 'string',  oneOf: [{ enum: ['app', 'device', 'student']}], required: true},
        tag: { type: 'string', minimum: 1, required: true },
        desc: { type: 'string' },
        studentTags: { type: 'list', items: [{ type: 'string' }]}
    }
};
export const LicenseTemplateTrackSchema: Schema = {
    type: 'object',
    properties: {
        ...LicenseTemplateSchema.properties,
        behaviors: { type: 'list', items: [TrackTemplateBehaviorSchema], minimum: 1, required: true}
    }
};
export const LicenseTemplateStudentSchema: Schema = {
    type: 'object',
    properties: {
        ...LicenseTemplateSchema.properties,
        behaviors: { type: 'list', items: [TrackTemplateBehaviorSchema], minimum: 1, required: true}
    }
};
