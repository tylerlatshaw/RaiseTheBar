export function getCurrentDate() {
    const month = new Date().getMonth() + 1;
    const date = new Date().getDate();
    const year = new Date().getFullYear();

    return month + "/" + date + "/" + year;
}

export function getCurrentDateISOFormat() {
    const month = new Date().getMonth();
    const date = new Date().getDate();
    const year = new Date().getFullYear();

    const fullDate = new Date(year, month, date);
    const result = fullDate.toISOString().substring(0, 10);

    return result;
}

export function getCurrentDateTime(date: string) {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();

    return date + " " + hours + ":" + minutes + ":" + seconds;
}