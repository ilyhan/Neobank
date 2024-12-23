
export interface IOption {
    title: string;
    value: number;
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