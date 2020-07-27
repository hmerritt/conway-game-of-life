import React from "react";
import { DefaultButton, PrimaryButton } from "@fluentui/react";

function Button(props) {
    return (
        <>
            {
                props.primary ?
                <PrimaryButton
                    text={props.text}
                    onClick={props.action}
                    allowDisabledFocus
                    disabled={props.disabled ? true : false}
                /> :
                <DefaultButton
                    text={props.text}
                    onClick={props.action}
                    allowDisabledFocus
                    disabled={props.disabled ? true : false}
                />
            }
        </>
    );
}

export default Button;
