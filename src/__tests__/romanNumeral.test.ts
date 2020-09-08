import { romanNumeral } from "../index";


test("outside lower bounds, 0", ()=>{
    expect(romanNumeral(0)).toBe("");
});

test("outside upper bounds, 4000", ()=>{
    expect(romanNumeral(4000)).toBe("");
});

test("non whole number, 3999.00001", ()=>{
    expect(romanNumeral(4999.00001)).toBe("");
});


test("non whole number, 0.99999", ()=>{
    expect(romanNumeral(0.99999)).toBe("");
});

test("negative number, -1", ()=>{
    expect(romanNumeral(-1)).toBe("");
});


test("ones digit conversion", ()=>{

    const result = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    result.forEach((value, index) => {
        expect(romanNumeral(index + 1)).toBe(value);
    })
});

test("tens digit conversion", ()=>{

    const result = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];

    result.forEach((value, index) => {
        const x = (index + 1) * 10;
        expect(romanNumeral(x)).toBe(value);
    })
});

test("hundreds digit conversion", ()=>{

    const result = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];

    result.forEach((value, index) => {
        const x = (index + 1) * 100;
        expect(romanNumeral(x)).toBe(value);
    })
});

test("thousands digit conversion", ()=>{

    const result = ["M", "MM", "MMM"];

    result.forEach((value, index) => {
        const x = (index + 1) * 1000;
        expect(romanNumeral(x)).toBe(value);
    })
});


test("complete range test", ()=>{

    const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const thousands = ["", "M", "MM", "MMM"];

    for (let i = 1; i <= 3999; ++i) {
        const onesDigit = i % 10;
        const tensDigit = Math.floor((i % 100) / 10);
        const hundredsDigit = Math.floor((i % 1000) / 100);
        const thousandsDigit = Math.floor((i % 10000) / 1000);
        
        expect(romanNumeral(i)).toBe(thousands[thousandsDigit] + hundreds[hundredsDigit] + tens[tensDigit] + ones[onesDigit]);        
    }
});
