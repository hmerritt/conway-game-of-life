import React, { useState, useEffect } from "react";
import { useInterval } from "./hooks/useInterval";

import { nextGeneration } from "./utils/game-of-life";
import { createMatrix, randomBinary } from "./utils/matrix";

import Cell from "./components/Cell";

function App() {

    // Grid matrix
    const [matrix, setMatrix] = useState([[]]);
    const [matrixSize, setMatrixSize] = useState(25);
    const [generation, setGeneration] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const handleToggleRunning = () => {
        setIsRunning(!isRunning);
    }

    const handleNextGeneration = () => {
        setMatrix(nextGeneration(matrix))
        setGeneration(generation + 1);
    }

    const handleReset = () => {
        setIsRunning(false);
        setGeneration(0);
    }

    const handleClearMatrix = () => {
        handleReset();
        setMatrix(createMatrix(matrixSize, matrixSize, () => 0));
    }

    const handleRandomizeMatrix = () => {
        handleReset();
        setMatrix(createMatrix(matrixSize, matrixSize, randomBinary));
    }

    // Toggle cell value
    const toggleCellValue = (cell) => {
        // Only toggle value if not running
        if (!isRunning) {
            const newMatrix = [...matrix];
            const cellValue = newMatrix[ cell[0] ][ cell[1] ];
            newMatrix[ cell[0] ][ cell[1] ] = !cellValue ? 1 : 0;
            setMatrix(newMatrix);
        }
    }

    // Generate matrix and populate with random bits
    useEffect(() => {
        handleRandomizeMatrix();
    }, [matrixSize]);

    useInterval(() => {
        if (isRunning && matrix[0].length > 0)
            handleNextGeneration();
    }, 200);

    return (
        <div className="App">
            <div className="container">
                <h1>Game Of Life</h1>
                <h2>{matrixSize} x {matrixSize} : Generation {generation}</h2>

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

                <button onClick={handleToggleRunning}>{isRunning ? "Stop" : "Start"}</button>
                <button onClick={handleNextGeneration}>Next State</button>
                <button onClick={handleClearMatrix}>Clear Grid</button>
                <button onClick={handleRandomizeMatrix}>Randomize</button>
            </div>
        </div>
    );
}

export default App;
