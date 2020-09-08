export function hamming(n: number): number {

    const queues = [
        {queue: new Array<number>(), base: 2},
        {queue: new Array<number>(), base: 3},
        {queue: new Array<number>(), base: 5}
    ];

    let nthHam = 1;
    
    for (let i = 1; i < n; ++i) {
 
        let minArray: number[] = [];
        queues.forEach((value, index, array) => {
           array[index].queue.push(value.base * nthHam);

           minArray.push(array[index].queue[0]);
        });

        nthHam = minArray.reduce((min, val) => Math.min(min, val));

        queues.forEach((value, index, array) => {
            if (array[index].queue[0] === nthHam) {
                array[index].queue.shift();
            }
         });
    }

    return nthHam;
}