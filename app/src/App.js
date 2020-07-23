import React, { useState, useEffect } from "react";

import { nextGeneration } from "./utils/game-of-life";
import { createMatrix, randomBinary } from "./utils/matrix";

import Cell from "./components/Cell";

function App() {

    // Grid matrix
    const [matrix, setMatrix] = useState([[]]);
    const [matrixSize, setMatrixSize] = useState(25);

    //
    const handleNextGeneration = () => {
        setMatrix(nextGeneration(matrix))
    }

    const handleClearMatrix = () => {
        setMatrix(createMatrix(matrixSize, matrixSize, () => 0));
    }

    const handleRandomizeMatrix = () => {
        setMatrix(createMatrix(matrixSize, matrixSize, randomBinary));
    }

    // Toggle cell value
    const toggleCellValue = (cell) => {
        const newMatrix = [...matrix];
        const cellValue = newMatrix[ cell[0] ][ cell[1] ];
        newMatrix[ cell[0] ][ cell[1] ] = !cellValue ? 1 : 0;
        setMatrix(newMatrix);
    }

    // Generate matrix and populate with random bits
    useEffect(() => {
        handleRandomizeMatrix();
    }, [matrixSize]);

    return (
        <div className="App" onClick={() => { /*setMatrix(nextGeneration(matrix))*/ }}>
            <div className="container">
                <h1>Game Of Life</h1>
                <h2>{matrixSize} x {matrixSize}</h2>

                <div className="grid">
                    {
                        matrix.map((valY, indexY) => {
                            return (
                                <div className="grid-row" key={indexY}>
                                    {
                                        matrix[indexY].map((valX, indexX) => {
                                            return (
                                                <Cell
                                                    cell={[indexY, indexX]}
                                                    living={matrix[indexY][indexX]}
                                                    toggleCellValue={toggleCellValue}
                                                    key={indexY + indexX}
                                                />
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>

                <button onClick={handleNextGeneration}>Next State</button>
                <button onClick={handleClearMatrix}>Clear Grid</button>
                <button onClick={handleRandomizeMatrix}>Randomize</button>
            </div>
        </div>
    );
}

export default App;
