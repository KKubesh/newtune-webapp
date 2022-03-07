import React, { ReactNode } from "react";

type ButtonProps = {
    color: string;
    text: string;
    secondary?: boolean;
    width?: string;
    handleClick: () => void;
    children?: ReactNode;
}

export const Button = ({ color, text, handleClick, secondary = false, children, width }: ButtonProps) => {
    return (
        <button style={secondary ? { border: `2px solid ${color}`, width: width } : { backgroundColor: color, width: width }} className="Button" onClick={handleClick}>
            {text}
            {children && <div className="Button-Child">{children}</div>}
        </button>
    )
}