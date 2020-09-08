// Tail Call Optimization factorial but seems no longer supported
// this will still result:
// RangeError: Maximum call stack size exceeded
// export function factorial(n: number) : number {

//     const factorialTCO = (n: number, prod: number):number => {
//         return (n === 0) ? prod : factorialTCO(n - 1, prod * n); 
//     }

//     let prod = 1;
//     factorialTCO(n, prod);
//     return prod;
// }


export function factorial(n: number): number {
    
    const trampoline = (fn: Function) => {
        let op = fn;
        while (op != null && typeof op === 'function') {
            op = op();
        }
    }

    function thunkedFactorial(n: number, callback: Function) {
        function cal(n:number, result: number, cb: Function) {
            if (n === 0) {
                callback(result);
                return null;
            }
            return () => {
                return cal.bind(cal, n - 1, n * result, callback);
            };
        }
      
        return cal.bind(cal, n, 1, callback);
    }

    let num = 0;
    trampoline(thunkedFactorial.bind(globalThis, n, (i: number) => { num = i; }));

    return num;
}
  