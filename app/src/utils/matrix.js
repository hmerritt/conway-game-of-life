
/*
 * Creates a matrix of a defined size
 *
 * E.G createMatrix(3, 5)
 * [
 *   [0, 0, 0, 0, 0],
 *   [0, 0, 0, 0, 0],
 *   [0, 0, 0, 0, 0],
 * ]
 */
export const createMatrix = (y = 25, x = 25) => {
    const matrix = [];

    for (let stepY = 0; stepY < y; stepY++) {
        const arrX = [];

        for (let stepX = 0; stepX < x; stepX++) {
            arrX.push(0);
        }

        matrix.push(arrX);
    }

    return matrix;
};
