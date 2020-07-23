import React, { useState, useEffect } from "react";

import { createMatrix, randomBinary } from "./utils/matrix";

function App() {

    // Grid matrix
    const [matrix, setMatrix] = useState([[]]);

    // Generate matrix and populate with random bits
    useEffect(() => {
        setMatrix(createMatrix(25, 25, randomBinary));
    }, []);

    useEffect(() => {
        console.log(matrix);
    }, [matrix]);

    return (
        <div className="App">
            <h1>Game Of Life</h1>

            <div className="table">
                {
                    matrix.map((valY, indexY) => {
                        return [...matrix[indexY].map((valX, indexX) => {
                            return (
                                <div className={`cell${matrix[indexY][indexX] ? " active" : ""}`}></div>
                            );
                        }), <><br /></>]
                    })
                }
            </div>
        </div>
    );
}

export default App;
