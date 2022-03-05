import React from "react";

type ButtonProps = {
    color: string;
    text: string;
    handleClick: () => void;
}

export const Button = ({ color, text, handleClick }: ButtonProps) => {
    return (
        <button style={{ backgroundColor: color }} className="Button" onClick={handleClick}>
            {text}
        </button>
    )
}