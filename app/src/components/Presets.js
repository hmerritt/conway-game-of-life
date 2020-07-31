import React from "react";
import { CommandButton, IContextualMenuProps, IIconProps } from "@fluentui/react";

import { even, odd, cross } from "../utils/matrixPresets";

function Presets({ matrixSize, setMatrix, disabled }) {

    const addIcon: IIconProps = { iconName: 'Add' };

    const menuProps: IContextualMenuProps = {
        items: [
            {
                key: "even",
                text: "Even",
                onClick: () => {setMatrix( even(matrixSize) )}
            },
            {
                key: "odd",
                text: "Odd",
                onClick: () => {setMatrix( odd(matrixSize) )}
            },
            {
                key: "cross",
                text: "Cross",
                onClick: () => {setMatrix( cross(matrixSize) )}
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
