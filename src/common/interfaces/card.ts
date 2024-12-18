import { ImageComponentsTypes } from "@/common/svg-helper";

export interface ICard {
    src: string;
    alt: string;
}

export interface ICreditCardDetails {
    title: string;
    description: string;
    tooltip: string;
}

export interface IStepGetCard {
    description: string;
}

export interface IAboutCard {
    icon: ImageComponentsTypes;
    title: string;
    description: string;
}

export interface ICashbackCard {
    title: string;
    description: string;
}