
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
            const count = (y * stepY) + stepX;
            arrX.push(valueCb(count, [stepY, stepX]));
        }

        matrix.push(arrX);
    }

    return matrix;
};

/*
 * Map over each value in a matrix
 * returns a new matrix from running a callback on each value
 */
export const mapMatrix = (matrix, cb) => {
    const newMatrix = [];

    for (let stepY = 0; stepY < matrix.length; stepY++) {
        const arrX = [];

        for (let stepX = 0; stepX < matrix[stepY].length; stepX++) {
            let cell = matrix[stepY][stepX];
            arrX.push( cb(cell, [stepY, stepX]) );
        }

        newMatrix.push(arrX);
    }

    return newMatrix;
}

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
