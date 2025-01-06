import { ICardConditions } from "@/common/interfaces/card";

export const cardConditions: ICardConditions[] = [
    {
        key: "Card currency",
        value: "Rubles, dollars, euro",
    },

    {
        key: "Interest free period",
        value: "0% up to 160 days",
    },

    {
        key: "Payment system",
        value: "Mastercard, Visa",
    },

    {
        key: "Maximum credit limit on the card",
        value: "600 000 ₽",
    },

    {
        key: "Replenishment and withdrawal",
        value: "At any ATM. Top up your credit card for free with cash or transfer from other cards",
    },

    {
        key: "Max cashback per month",
        value: "15 000 ₽",
    },

    {
        key: "Transaction Alert",
        value: ["60 ₽ — SMS or push notifications",
               "0 ₽ — card statement, information about transactions in the online bank"]
    },
]