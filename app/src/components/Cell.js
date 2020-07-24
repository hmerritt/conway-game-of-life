import React from "react";

function Cell(props) {
    return (
        <div
            className={`cell${props.living ? " living" : ""}`}
            /*style={{backgroundColor: props.living ? "#5D56F0" : "#FFFFFF"}}*/
            onClick={() => {props.toggleCellValue(props.cell)}}
        >
        </div>
    );
}

export default Cell;
