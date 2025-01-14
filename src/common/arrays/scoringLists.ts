import { IOption } from "@/common/interfaces/form";
import { EEmploymentStatus, EGender, EMaritalStatus, EPosition } from "@/common/enums/application";

export const gendreOptions: IOption[] = [
    {
        title: "Male",
        value: EGender.MALE,
    },

    {
        title: "Female",
        value: EGender.FEMALE,
    },
];

export const maritalStatusOptions: IOption[] = [
    {
        title: "Married",
        value: EMaritalStatus.MARRIED,
    },

    {
        title: "Divorced",
        value: EMaritalStatus.DIVORCED,
    },

    {
        title: "Single",
        value: EMaritalStatus.SINGLE,
    },

    {
        title: "Window widower",
        value: EMaritalStatus.WIDOW_WIDOWER,
    },
];

export const dependentsOptions: IOption[] = [
    {
        title: "0",
        value: 0,
    },

    {
        title: "1",
        value: 1,
    },

    {
        title: "2",
        value: 2,
    },

    {
        title: "3",
        value: 3,
    },

    {
        title: "4",
        value: 4,
    },

    {
        title: "5",
        value: 5,
    },
];

export const employmentStatusOptions: IOption[] = [
    {
        title: "Unemployed",
        value: EEmploymentStatus.UNEMPLOYED,
    },

    {
        title: "Self employed",
        value: EEmploymentStatus.SELF_EMPLOYED,
    },

    {
        title: "Employed",
        value: EEmploymentStatus.EMPLOYED,
    },

    {
        title: "Business owner",
        value: EEmploymentStatus.BUSINESS_OWNER,
    }
];

export const positionOptions: IOption[] = [
    {
        title: "Worker",
        value: EPosition.WORKER,
    },

    {
        title: "Mid manager",
        value: EPosition.MID_MANAGER,
    },

    {
        title: "Top manager",
        value: EPosition.TOP_MANAGER,
    },

    {
        title: "Owner",
        value: EPosition.OWNER,
    },
]