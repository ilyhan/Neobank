
export enum EApplicationStep {
    PRESCORING = 'PRESCORING',
    CODE = 'CODE',
};

export enum EMaritalStatus {
    MARRIED = 'MARRIED',
    SINGLE = 'SINGLE',
    DIVORCED = 'DIVORCED',
    WIDOW_WIDOWER = 'WIDOW_WIDOWER',
};

export enum EEmploymentStatus {
    UNEMPLOYED = 'UNEMPLOYED',
    SELF_EMPLOYED = 'SELF_EMPLOYED',
    EMPLOYED = 'EMPLOYED',
    BUSINESS_OWNER = 'BUSINESS_OWNER',
};

export enum EPosition {
    WORKER = 'WORKER',
    MID_MANAGER = 'MID_MANAGER',
    TOP_MANAGER = 'TOP_MANAGER',
    OWNER = 'OWNER',
};

export enum EGender {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
};

export enum EApplicationStatus {
    PREAPPROVAL = 'PREAPPROVAL',
    CLIENT_DENIED = 'CLIENT_DENIED',
    APPROVED = 'APPROVED',
    CC_DENIED = 'CC_DENIED',
    CC_APPROVED = 'CC_APPROVED',
    PREPARE_DOCUMENTS = 'PREPARE_DOCUMENTS',
    DOCUMENT_CREATED = 'DOCUMENT_CREATED',
    DOCUMENT_SIGNED = 'DOCUMENT_SIGNED',
    CREDIT_ISSUED = 'CREDIT_ISSUED'
};

export const NumAppStatus: Record<EApplicationStatus | EApplicationStep, number> = {
    CLIENT_DENIED: -1,
    CC_DENIED: -1,
    PRESCORING: 0,
    PREAPPROVAL: 1,
    APPROVED: 2,
    CC_APPROVED: 3,
    PREPARE_DOCUMENTS: 4,
    DOCUMENT_CREATED: 5,
    CODE: 6,
    DOCUMENT_SIGNED: 7,
    CREDIT_ISSUED: 8,
};

