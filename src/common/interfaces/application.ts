import { EApplicationStatus, EEmploymentStatus, EGender, EMaritalStatus, EPosition } from "@/common/enums/application";

export interface IPayment {
    number: number;
    date: string;
    totalPayment: number;
    interestPayment: number;
    debtPayment: number;
    remainingDebt: number;
};

export interface IStatusHistory {
    status: EApplicationStatus;
    time: string;
    changeType: "MANUAL" | "AUTOMATIC";
};

export interface ICredit {
    amount: number;
    term: number;
    monthlyPayment: number;
    rate: number;
    psk: number;
    isInsuranceEnabled: boolean;
    isSalaryClient: boolean;
    paymentSchedule: IPayment[] | string;
};

export interface ICreditApplication {
    id: number;
    client: {
        firstName: string;
        lastName: string;
        middleName: string | null;
        email: string;
        gender: EGender;
        birthdate: string;
        passportSeries: string;
        passportNumber: string;
        passportIssueDate: string;
        passportIssueBranch: string;
        maritalStatus: EMaritalStatus;
        dependentAmount: number;
        employment: {
            employmentStatus: EEmploymentStatus;
            employerINN: number;
            salary: number;
            position: EPosition;
            workExperienceTotal: number;
            workExperienceCurrent: number;
        }
        account: number;
    };
    credit: ICredit;
    status: EApplicationStatus;
    creationDate: string;
    signDate: string | null;
    sesCode: string | null;
    statusHistory: IStatusHistory[];
}