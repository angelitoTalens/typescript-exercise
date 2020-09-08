import { factorial } from "../index";

test("0!", () => {
    expect(factorial(0)).toBe(1);
});

test("3!", () => {
    expect(factorial(3)).toBe(6);
});

test("3!", () => {
    expect(factorial(3)).toBe(6);
});


test("50000!", () => {
    expect(factorial(50000)).toBe(Infinity);
});