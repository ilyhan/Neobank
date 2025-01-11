export interface IPayment {
    number: number;
    date: string ;
    totalPayment: number;
    interestPayment: number;
    debtPayment: number;
    remainingDebt: number;
}