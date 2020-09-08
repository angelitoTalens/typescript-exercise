
export function romanNumeral(n: number): string {

    if ((n > 3999) || (n < 1) || (n !== Math.floor(n))) {
        return "";
    }

    type ApplicableNumerals = {
        lower: string,
        mid: string,
        upper: string
    }

    // Supports 1-3999, any unsupported values will result into an empty string
    const romanNumeralConverter = (n: number, numerals: ApplicableNumerals): string => {
        let result = "";
        if (n >= 1 && n <= 3) {
            result = result.padEnd(n, numerals.lower);        
        }
        else if (n >= 4 && n <= 8) {
            result = numerals.mid;
            result = (n === 4) ? result.padStart(2, numerals.lower) : result.padEnd(n - 4, numerals.lower);
        }
        else {
            result = numerals.lower + numerals.upper;
        }

        return result;
    }

    const arr = n.toString().split("").reverse();

    let result = "";

    const numerals: ApplicableNumerals[] = [
        { lower: "I", mid: "V", upper: "X"},
        { lower: "X", mid: "L", upper: "C"},
        { lower: "C", mid: "D", upper: "M"},
        { lower: "M", mid: "", upper: ""},
    ];

    arr.forEach((value, index) => {
        const digit = parseInt(value);
        if (digit > 0) {
            result = romanNumeralConverter(digit, numerals[index]) + result;
        }        
    });

    return result;
}