export const currencies: string[] = ["USD", "EUR", "CNY", "CHF", "JPY", "TRY"];

export interface ICurrency {
    currency: string;
    course: number;
}

export interface ICurrencyResponse {
    success: boolean;
    timestamp: number;
    base: string;
    date: string;
    rates: ExchangeRates;
}

interface ExchangeRates {
    [key: string]: number;
}