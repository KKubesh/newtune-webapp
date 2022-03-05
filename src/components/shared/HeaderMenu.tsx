import React, { ReactNode } from "react";

type HeaderMenuProps = {
    rightMenuItem: ReactNode;
}

const Logo = () => {
    return <div className="Logo">Logo</div>
}

const Title = () => {
    return <div className="Menu-Title">NewTunes</div>
}

export const HeaderMenu = ({ rightMenuItem }: HeaderMenuProps) => {
    return (
        <>
            <div className="Menu-Container">
                <Logo />
                <Title />
                <div className="Menu-Buttons">{rightMenuItem}</div>
            </div>
        </>
    )
}