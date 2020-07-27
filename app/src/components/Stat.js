import React from "react";
import { Text } from "@fluentui/react";

function Stat(props) {
    return (
        <>
            <div className={`stat ${props.name}`}>
                <div className="stat-title">
                    <Text variant={"xLarge"} block nowrap>
                        {props.title}
                    </Text>
                </div>
                <div className="stat-value">
                    <Text variant={"xLarge"} block nowrap>
                        {props.value}
                    </Text>
                </div>
            </div>
        </>
    );
}

export default Stat;
