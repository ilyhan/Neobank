import { ICurrency, ICurrencyResponse, currencies } from "@/common/interfaces/currency";

export const getCurrency = (data: ICurrencyResponse, to: string): ICurrency[] => {
    const current = data.rates[to];
    const result: ICurrency[] = [];

    currencies.forEach(currency => {
        if (data.rates[currency]) {
            result.push({
                currency: currency, 
                course: current / data.rates[currency], 
            });
        }
    });

    return result;
}