export function binarySearch(term: number, searchSpace: number[]): any {

    const r = Math.ceil(searchSpace.length / 2) - 1;

    if (term === searchSpace[r]) {
        return r;
    }
    else if (searchSpace.length <= 1) {
        return undefined;
    }
    else {
        if (term > searchSpace[r]) {
            let result = binarySearch(term, searchSpace.slice(r + 1));
            return (result === undefined) ? undefined : r + 1 + result;
        }
        else {
            let result = binarySearch(term, searchSpace.slice(0, r));
            return (result === undefined) ? undefined : result;
        }
    }
}