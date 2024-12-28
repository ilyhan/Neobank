
export const validateAge = (value: string, age: number): boolean | string => {
    const currentDate = new Date();

    const dateArray = value.split('.');
    const dateString = `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`;

    const date = new Date(dateString);

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
