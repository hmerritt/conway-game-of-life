import { createMatrix } from "./matrix";

export const even = (size) => {
    return createMatrix(size, size, (count) => {
        if (count % 2 === 0) return 1;
        return 0;
    });
}

export const odd = (size) => {
    return createMatrix(size, size, (count) => {
        if (count % 2 === 0) return 0;
        return 1;
    });
}

export const cross = (size) => {
    return createMatrix(size, size, (count, steps) => {
        if (steps[0] === steps[1]) return 1;
        if ((size - steps[0]) === steps[1]+1) return 1;
        return 0;
    });
}
