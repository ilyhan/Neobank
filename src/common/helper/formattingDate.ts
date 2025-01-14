import { dateReversePattern } from "./validationPatterns";

export const formattingDate = (data: string) => {
    let resultDate;

    if (dateReversePattern.test(data)) {
        const dateArray = data.split('-');
        resultDate = `${dateArray[2]}.${dateArray[1]}.${dateArray[0]}`
    }else{
        return data;
    }

    return resultDate;
};