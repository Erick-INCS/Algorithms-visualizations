class StateSpace {
    constructor(n, sequence) {
        this.n = n;
        this.sequence = sequence;
    }
}

function classicMethod(arr, a, b, k) {
    for (let i = a - 1; i < b; i++) {
        arr[i] = (arr[i] || 0) + k;
    }
    return arr;
}

function fastMethod(arr, a, b, k) {
    arr[a] = (arr[a] || 0) + k;
    arr[b] = (arr[b] || 0) - k;
    return arr;
}


export default StateSpace;
export {
    classicMethod,
    fastMethod,
}