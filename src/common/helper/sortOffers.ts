import { IOffer } from "@/common/interfaces/form";

export const sortOffers = (data: IOffer[]): IOffer[] => {
    return data.sort((a, b) => {
        if (a.monthlyPayment < b.monthlyPayment) {
            return 1;
        }
        if (a.monthlyPayment > b.monthlyPayment) {
            return -1;
        }
        return 0;
    });
}