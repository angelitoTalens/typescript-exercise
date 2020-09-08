import { hamming } from "../index";

test("first 20 hamming numbers", ()=> {
    const first20 = [1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, 18, 20, 24, 25, 27, 30, 32, 36];

    first20.forEach((value, index) => {
        expect(hamming(index + 1)).toBe(value);
    })
})

test("5000th hamming number", ()=> {    
    expect(hamming(5000)).toBe(50837316566580);
})