import { validateIP } from "../index"

test("Valid IP 0.0.0.0", ()=> {
    expect(validateIP("0.0.0.0")).toBeTruthy();
})

test("Valid IP 19.19.19.19", ()=> {
    expect(validateIP("19.19.19.19")).toBeTruthy();
})

test("Valid IP 199.199.199.199", ()=> {
    expect(validateIP("19.19.19.19")).toBeTruthy();
})

test("Valid IP 249.249.249.249", ()=> {
    expect(validateIP("249.249.249.249")).toBeTruthy();
})

test("Valid IP 255.255.255.255", ()=> {
    expect(validateIP("255.255.255.255")).toBeTruthy();
})

test("Valid IP 255.249.19.0", ()=> {
    expect(validateIP("255.249.19.0")).toBeTruthy();
})

test("Invalid IP: 09.08.07.06", ()=> {
    expect(validateIP("09.08.07.06")).toBeFalsy();
});

test("Invalid IP: 099.088.077.066", ()=> {
    expect(validateIP("099.088.077.066")).toBeFalsy();
});

test("Invalid IP: A.B.C.D", ()=> {
    expect(validateIP("A.B.C.D")).toBeFalsy();
});

test("Invalid IP: 256.256.256.256", ()=> {
    expect(validateIP("A.B.C.D")).toBeFalsy();
});

test("Invalid IP 0.0.0", ()=> {
    expect(validateIP("0.0.0")).toBeFalsy();
});


test("Invalid IP 0.0.0.0.0", ()=> {
    expect(validateIP("0.0.0.0.0")).toBeFalsy();
});

test("Invalid IP 1255.1255.1255.1255", ()=> {
    expect(validateIP(" 1255.1255.1255.1255")).toBeFalsy();
});


test("Valid IP 1.2.3.4", ()=> {
    expect(validateIP("1.2.3.4")).toBeTruthy();
});

test("Valid IP 123.45.67.89", ()=> {
    expect(validateIP("123.45.67.89")).toBeTruthy();
});


test("Invalid IP 1.2.3", ()=> {
    expect(validateIP("1.2.3")).toBeFalsy();
});

test("Invalid IP 1.2.3.4.5", ()=> {
    expect(validateIP("1.2.3.4.5")).toBeFalsy();
});

test("Invalid IP 123.456.78.90", ()=> {
    expect(validateIP("123.456.78.90")).toBeFalsy();
});

test("Invalid IP 123.045.067.089", ()=> {
    expect(validateIP("123.045.067.089")).toBeFalsy();
});