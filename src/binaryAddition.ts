export function add(a: string, b: string): string {

    const xor = (a: string, b: string) => {
        return (a === b) ? "0" : "1";
    }
    
    const and = (a: string, b: string) => {
        return ((a === "1") && (b === "1")) ? "1" : "0";
    }

    const or = (a: string, b: string) => {
        return ((a === "1") || (b === "1")) ? "1" : "0";
    }
   
    const maxLength = Math.max(a.length, b.length);

    const aStr = a.padStart(maxLength, "0");
    const bStr = b.padStart(maxLength, "0");

    let sum = "";
    let carry = "0";
    for (let i = maxLength - 1; i >= 0; --i) {
        sum = xor(xor(aStr[i], bStr[i]), carry) + sum;
        carry = or(or(and(aStr[i], bStr[i]), and(aStr[i], carry)), and(bStr[i], carry));
    }

    if (carry === "1") {
        sum = carry + sum;
    }

    return sum.toString()
            .replace(/^0+1/, "1")
            .replace(/^0+$/, "0");
}