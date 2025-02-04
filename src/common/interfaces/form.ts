import { EEmploymentStatus, EGender, EMaritalStatus, EPosition } from "@/common/enums/application";

export interface IOption {
    title: string;
    value: number | string;
}

export interface IPrescoring {
    amount: number;
    term: number;
    firstName: string;
    lastName: string;
    middleName: string | null;
    email: string;
    birthdate: string | Date;
    passportSeries: string;
    passportNumber: string;
}

export interface IOffer {
    statementId:string;
    requestedAmount: number;
    totalAmount: number;
    term: number;
    monthlyPayment: number;
    rate: number;
    insuranceEnabled: boolean;
    salaryClient: boolean;
}

export interface IScoring {
    gender: EGender;
    maritalStatus: EMaritalStatus;
    dependentAmount: number;
    passportIssueDate: string;
    passportIssueBranch: string;
    employment: {
        employmentStatus: EEmploymentStatus;
        employerINN: number | string;
        salary: number;
        position: EPosition;
        workExperienceTotal: number;
        workExperienceCurrent: number;
    }
    account: number | string;
}