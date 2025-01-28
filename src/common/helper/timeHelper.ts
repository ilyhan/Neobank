export function getFullDate(timestamp: number) {
    const date = new Date(timestamp); 

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${day}.${month}.${year}`;
}