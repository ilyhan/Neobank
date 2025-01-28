
export const validateDate = (value: string): boolean | string => {
    const dateArray = value.split('.');
    const dateString = `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`;
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
        return "Incorrect date";
    }

    const currentDate = new Date();

    if (date > currentDate) {
        return "Incorrect date of passport issue date";
    }

    return true;
}