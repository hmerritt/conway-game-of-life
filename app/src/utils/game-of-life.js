import { mapMatrix, arrayIndexExists } from "./matrix";

/*
 * Return number of living neighbours of a specific cell in matrix
 */
export const livingNeighbours = (matrix, cell = [0, 0]) => {
    let count = 0;

    let isLeft, isRight, isTop, isBottom, isLeftTop, isRightTop, isLeftBottom, isRightBottom;

    isLeft = arrayIndexExists(matrix[cell[0]], cell[1] - 1);
    isRight = arrayIndexExists(matrix[cell[0]], cell[1] + 1);
    isTop = arrayIndexExists(matrix, cell[0] - 1);
    isBottom = arrayIndexExists(matrix, cell[0] + 1);

    isLeftTop = isLeft && isTop;
    isRightTop = isRight && isTop;
    isLeftBottom = isLeft && isBottom;
    isRightBottom = isRight && isBottom;

    // Left
    if ( isLeft && matrix[ cell[0] ][ cell[1] - 1 ] ) count++;

    // Right
    if ( isRight && matrix[ cell[0] ][ cell[1] + 1 ] ) count++;

    // Top
    if ( isTop && matrix[ cell[0] - 1 ][ cell[1] ] ) count++;

    // Bottom
    if ( isBottom && matrix[ cell[0] + 1 ][ cell[1] ] ) count++;

    // Left Top
    if ( isLeftTop && matrix[ cell[0] - 1 ][ cell[1] - 1 ] ) count++;

    // Right Top
    if ( isRightTop && matrix[ cell[0] - 1 ][ cell[1] + 1 ] ) count++;

    // Left Bottom
    if ( isLeftBottom && matrix[ cell[0] + 1 ][ cell[1] - 1 ] ) count++;

    // Right Bottom
    if ( isRightBottom && matrix[ cell[0] + 1 ][ cell[1] + 1 ] ) count++;

    return count;
}

/*
 * Return state of next generation
 */
export const nextGeneration = (matrix) => {
    return mapMatrix(matrix, (cell, position) => {
        let newCell = 0;
        let cellLivingNeighbours = livingNeighbours(matrix, position);

        // Cell is already living
        if (cell === 1) {
            // Stay living if cell has 2 or 3 living neighbours
            if (cellLivingNeighbours === 2 || cellLivingNeighbours === 3) {
                newCell = 1;
            }
        }

        // Cell is dead
        else {
            // Rise from dead if cell has exactly 3 living neighbours
            if (cellLivingNeighbours === 3) {
                newCell = 1;
            }
        }

        return newCell;
    });
}
