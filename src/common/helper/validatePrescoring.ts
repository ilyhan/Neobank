import { IPrescoring } from "@/common/interfaces/form"

export const validatePrescoring = (data: IPrescoring) => {
    if (typeof (data.birthdate) == 'string') {
        const dateBirth = data.birthdate.split('.');
        data.birthdate = `${dateBirth[2]}-${dateBirth[1]}-${dateBirth[0]}`;
    }
    data.firstName = data.firstName.trim();
    data.lastName = data.lastName.trim();

    return data;
}