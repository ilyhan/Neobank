import { EApplicationStatus } from "@/common/enums/application";

export interface IPayment {
    number: number;
    date: string;
    totalPayment: number;
    interestPayment: number;
    debtPayment: number;
    remainingDebt: number;
};

export interface ICreditApplication {
    id: number;
    client: {
        firstName: string;
        lastName: string;
        middleName: string | null;
        email: string;
        gender: "MALE" | "FEMALE";
        birthdate: string;
        passportSeries: string;
        passportNumber: string;
        passportIssueDate: string;
        passportIssueBranch: string;
        maritalStatus: "MARRIED" | "SINGLE" | "DIVORCED" | "WIDOW_WIDOWER";
        dependentAmount: number;
        employment: {
            employmentStatus: "UNEMPLOYED" | "SELF_EMPLOYED" | "EMPLOYED" | "BUSINESS_OWNER";
            employerINN: number;
            salary: number;
            position: "WORKER" | "MID_MANAGER" | "TOP_MANAGER" | "OWNER";
            workExperienceTotal: number;
            workExperienceCurrent: number;
        }
        account: string;
    };
    credit: {
        amount: number;
        term: number;
        monthlyPayment: number;
        rate: number;
        psk: number;
        isInsuranceEnabled: boolean;
        isSalaryClient: boolean;
        paymentSchedule: IPayment[];
    };
    status: EApplicationStatus;
    creationDate: string;
    signDate: string | null;
    sesCode: string | null;
    statusHistory: {
        status: EApplicationStatus;
        time: string;
        changeType: "MANUAL" | "AUTOMATIC";
    }[];
}