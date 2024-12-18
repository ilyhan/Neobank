import { ICreditCardDetails } from "@/common/interfaces/card";

export const creditCardDetails: ICreditCardDetails[] = [
    {
        title: "Up to 160 days",
        description: "No percent",
        tooltip: "When repaying the full debt up to 160 days.",
    },

    {
        title: "Up to 600 000 ₽",
        description: "Credit limit",
        tooltip: "Over the limit willaccrue percent.",
    },

    {
        title: "0 ₽",
        description: "Card service is free",
        tooltip: "Promotion valid until December 31, 2022.",
    },
]