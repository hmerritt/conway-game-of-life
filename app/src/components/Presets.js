import React from "react";
import { CommandButton, IContextualMenuProps, IIconProps } from "@fluentui/react";

import { cross, even, odd, randomize } from "../utils/matrixPresets";

function Presets({ matrixSize, setMatrix, handleReset, disabled }) {

    const addIcon: IIconProps = { iconName: 'Add' };

    const menuProps: IContextualMenuProps = {
        items: [
            {
                key: "cross",
                text: "Cross",
                onClick: () => {handleReset(); setMatrix(cross(matrixSize))}
            },
            {
                key: "even",
                text: "Even",
                onClick: () => {handleReset(); setMatrix(even(matrixSize))}
            },
            {
                key: "odd",
                text: "Odd",
                onClick: () => {handleReset(); setMatrix(odd(matrixSize))}
            },
            {
                key: "randomize",
                text: "Randomize",
                onClick: () => {handleReset(); setMatrix(randomize(matrixSize))}
            },
        ],
    };

    return (
        <>
            <CommandButton
                iconProps={addIcon}
                text="Presets"
                menuProps={menuProps}
                disabled={disabled}
                checked={false}
            />
        </>
    );
}

export default Presets;
