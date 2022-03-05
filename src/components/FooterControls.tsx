import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { CatalogButton } from "./CatalogButton";

type FooterControlsProps = {
    view: string;
}

const FooterCatalog = () => {
    const navigate = useNavigate();
    return (
        <div className="Footer-Catalog">
            <Button color="#EFC1D4" text="Search" handleClick={() => navigate("../catalog")} />
        </ div>
    )
}

const FooterSaves = () => {
    const navigate = useNavigate();
    return (
        <div className="Footer-Saves">
            <Button color="#DFCB70" text="Saves" handleClick={() => navigate("../user")} />
        </ div>
    )
}

export const FooterControls = ({ view }: FooterControlsProps) => {
    return (
        <div style={{ width: "100%" }}>
            <div className="Footer-Container">
                {view === "catalog" &&
                    <FooterCatalog />
                }
                {view === "saves" &&
                    <FooterSaves />
                }
                {view === "catalog" &&
                    <div className="Footer-Catalog-Button">
                        <CatalogButton arrow="right" />
                    </div>
                }
            </div>
        </div>
    )
}