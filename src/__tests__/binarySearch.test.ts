import { binarySearch } from "../index";

test("empty array",  ()=> {
    expect(binarySearch(1, [])).toBe(undefined);
});

test("single element, no match",  ()=> {
    expect(binarySearch(1, [2])).toBe(undefined);
});

test("single element, match",  ()=> {
    expect(binarySearch(1, [1])).toBe(0);
});

test("multiple element, no match",  ()=> {
    expect(binarySearch(1, [2, 3, 4, 5, 6])).toBe(undefined);
});

test("multiple element, match at start",  ()=> {
    expect(binarySearch(1, [1, 2])).toBe(0);
});

test("multiple element, match at end",  ()=> {
    expect(binarySearch(2, [1, 2])).toBe(1);
});


 test("multiple element, 8 random in the middle",  ()=> {
    expect(binarySearch(8, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).toBe(7);
 });


 test("multiple element, 3 random in the middle",  ()=> {
    expect(binarySearch(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).toBe(2);
 });

 test("multiple element, 1 to 100",  ()=> {
    let arr = [...Array(100).keys()];
    
    arr.forEach((value, index, array) => {
        expect(binarySearch(value, array)).toBe(index);
    })
 });
