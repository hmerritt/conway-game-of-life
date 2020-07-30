import React, { useState, useMemo } from "react";
import { DefaultButton, IButtonProps, TeachingBubble } from "@fluentui/react";

function Rules(props) {
    const [isVisible, setIsVisible] = useState(false);
    const [page, setPage] = useState(1);

    const toggleIsVisible = () => setIsVisible(!isVisible);
    const nextPage = () => {
        let newPage = page + 1;
        if (newPage > 3) newPage = 1;
        setPage(newPage);
    };
    const previousPage = () => {
        let newPage = page - 1;
        if (newPage < 1) newPage = 1;
        setPage(newPage);
    }

    const buttonNext: IButtonProps = useMemo(
      () => ({
        children: "Next",
        onClick: nextPage,
      }),
      [toggleIsVisible],
    );

    const buttonPrevious: IButtonProps = useMemo(
      () => ({
        children: "Previous",
        onClick: previousPage,
      }),
      [toggleIsVisible],
    );

    return (
        <>
            <DefaultButton
                id="button-rules"
                onClick={toggleIsVisible}
                text={isVisible ? "Hide Rules" : "Show Rules"}
            />

            {isVisible && (
                <TeachingBubble
                    target="#button-rules"
                    primaryButtonProps={buttonNext}
                    secondaryButtonProps={buttonPrevious}
                    onDismiss={toggleIsVisible}
                    footerContent={`${page} of 3`}
                    headline="Game Of Life"
                >
                    {
                        page === 1 &&
                        "The Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970."
                    }
                    {
                        page === 2 &&
                        <>
                            Rule 1: <br /><br />
                            If the cell is alive and has 2 or 3 neighbors, then it remains alive. Else it dies.
                        </>
                    }
                    {
                        page === 3 &&
                        <>
                            Rule 2: <br /><br />
                            If the cell is dead and has exactly 3 neighbors, then it comes to life. Else if remains dead.
                        </>
                    }
                </TeachingBubble>
            )}
        </>
    );
}

export default Rules;
