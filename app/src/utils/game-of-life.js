import { arrayIndexExists } from "./matrix";

/*
 * Return state of next generation
 */
export const nextGeneration = (matrix) => {}

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
