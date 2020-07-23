import React, { useState } from "react";

import { createMatrix } from "./utils/matrix";

function App() {

    // Grid matrix
    const [matrix, setMatrix] = useState(createMatrix());

    console.log(createMatrix());

    return (
        <div className="App">
            <h1>Game Of Life</h1>
            {
                matrix.map((valY, indexY) => {
                    return [...matrix[indexY].map((valX, indexX) => {
                        return (
                            <div className="cell">{matrix[indexY][indexX]} </div>
                        );
                    }), <><br /></>]
                })
            }
        </div>
    );
}

export default App;
