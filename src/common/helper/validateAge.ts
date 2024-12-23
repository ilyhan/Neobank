
export const validateAge = (value: string | Date, age: number): boolean | string => {
    const currentDate = new Date();
    const date = new Date(value);

    if (isNaN(date.getTime())) {
        return "Incorrect date";
    }

    const ageDifference = currentDate.getFullYear() - date.getFullYear();

    const hasBirthdayPassed =
        (currentDate.getMonth() > date.getMonth()) ||
        (currentDate.getMonth() === date.getMonth() && currentDate.getDate() >= date.getDate());

    if (ageDifference > age || (ageDifference === age && hasBirthdayPassed)) {
        return true;
    } else {
        return "Incorrect age";
    }
}
