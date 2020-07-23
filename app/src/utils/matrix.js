
/*
 * Returns a matrix of a defined size
 *
 * E.G createMatrix(3, 5)
 * [
 *   [0, 0, 0, 0, 0],
 *   [0, 0, 0, 0, 0],
 *   [0, 0, 0, 0, 0],
 * ]
 */
export const createMatrix = (y = 25, x = 25, valueCb = () => 0) => {
    const matrix = [];

    for (let stepY = 0; stepY < y; stepY++) {
        const arrX = [];

        for (let stepX = 0; stepX < x; stepX++) {
            arrX.push(valueCb());
        }

        matrix.push(arrX);
    }

    return matrix;
};

/*
 * Returns a random binary value (0 or 1)
 */
export const randomBinary = () => {
    return Math.round(Math.random());
}

/*
 * Returns true if array index exists
 */
export const arrayIndexExists = (array, index) => {
    return Array.isArray(array) && array.hasOwnProperty(index);
}
