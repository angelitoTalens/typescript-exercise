// 1 Digit 0-9
// 2 Digit 10-99
// 3 Digit 100-199
// 3 Digit 200-249
// 3 Digit 250-255

export function validateIP(address: string): boolean {
    const arr = address.split(".");
    if (arr.length !== 4) {
        return false;
    }
    else {
        const re = /(^[0-9]$)|(^[1-9][0-9]$)|(^1[0-9]{2}$)|(^2[0-4][0-9]$)|(^25[0-5]$)/;
        return arr.every((value) => {
            return re.test(value);
        });
    }
}