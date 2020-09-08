import { add } from "../index";

test("Add 10 + 01", ()=> {
    expect(add("10", "01")).toBe("11");
});

test("Add 111 + 10", ()=> {
    expect(add("111", "10")).toBe("1001");
});

test("Add 1101 + 101", ()=> {
    expect(add("1101", "101")).toBe("10010");
});

test("Add 1101 + 10111", ()=> {
    expect(add("1101", "10111")).toBe("100100");
});


test("Add 0001 + 01", ()=> {
    expect(add("0001", "01")).toBe("10");
});


test("Add 1111 + 1111", ()=> {
    expect(add("1111", "1111")).toBe("11110");
});


test("Add 0000 + 00", ()=> {
    expect(add("0000", "00")).toBe("0");
});

test("0 to 50 combination sum", ()=> {

    const limit = 50;

    for (let i = 0; i <= limit; ++i) {
        for (let j = 0; j <= limit; ++j) {
            expect(add(i.toString(2), j.toString(2))).toBe((i + j).toString(2));
        }
    }
});