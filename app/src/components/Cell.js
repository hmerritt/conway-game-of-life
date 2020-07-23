import React, { useState, useEffect } from "react";

function Cell(props) {
    return (
        <div
            className={`cell${props.living ? " living" : ""}`}
            onClick={() => {props.toggleCellValue(props.cell)}}
        >
        </div>
    );
}

export default Cell;
