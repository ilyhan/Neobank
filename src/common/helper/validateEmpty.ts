
export const validateEmpty = (value: string): string | boolean => {
    if (value.trim() == '') {
        return 'Incorrect data';
    }
    return true;
}