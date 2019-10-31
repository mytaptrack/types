export interface IoTDevice {
    dsn?: string;
    studentId?: string;
    enterpriseId?: string;
    name: string;
    validated?: boolean;
    events: Array<IoTDeviceEvent>;
    subscriptions?: IoTDeviceSubscription[];
}

export interface IoTDeviceSubscription {
    type: 'Low Power' | 'Change' | 'De-register';
    userId: string;
}

export interface IoTDeviceEvent {
    eventId: string;
    presses: number | string;
    delayDelivery: string;
}

export interface IoTDeviceEdit extends IoTDevice {
    oldData: string;
    editMode: boolean;
    saving: boolean;
}

export interface VerifyRegistryResponse {
    validated: boolean;
}

export interface SetIoTDeviceDetails extends IoTDevice {
    studentId: string;
    dsn?: string;
}
