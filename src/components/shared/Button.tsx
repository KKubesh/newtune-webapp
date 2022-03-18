import React, { ReactNode } from "react";

type ButtonProps = {
    color: string;
    text: string;
    secondary?: boolean;
    width?: string;
    handleClick?: () => void;
    children?: ReactNode;
    submit?: boolean;
    disabled?: boolean;
}

export const Button = ({
    color,
    text,
    handleClick,
    secondary = false,
    children,
    width,
    submit = false,
    disabled = false
}: ButtonProps) => {
    const buttonColor = disabled ? "#C4C4C4" : color;
    return (
        <button style={
            secondary ? { border: `2px solid ${buttonColor}`, width: width } : { backgroundColor: buttonColor, width: width }}
            className="Button"
            onClick={handleClick}
            type={submit && "submit" || undefined}
        >
            {text}
            {children && <div className="Button-Child">{children}</div>}
        </button>
    )
}