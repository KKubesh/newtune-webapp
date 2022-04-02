import React from "react";
import { useNavigate } from "react-router-dom";
import { useFilterContext } from "../../context/FilterContext";
import { useUserContext } from "../../context/UserContext";
import { useFirestoreService } from "../../services/firestore";
import { Button } from "./Button";
import { CatalogButton } from "./CatalogButton";

type FooterControlsProps = {
    view: string;
}

const FooterCatalog = () => {
    const navigate = useNavigate();
    const { getAllFiltersSongsWhere } = useFirestoreService();
    const { clearFilters, currentFilters, setSongs } = useFilterContext();

    const handleSearch = async () => {
        await getAllFiltersSongsWhere(currentFilters, setSongs);
        navigate("../catalog");
    }

    return (
        <div className="Footer-Catalog">
            <Button color="#EFC1D4" text="Search" handleClick={handleSearch} />
        </ div>
    )
}

const FooterSaves = () => {
    const navigate = useNavigate();
    const handleSaves = async () => {
        // await getSongsWhere(currentFilters, setSongs);
        navigate("../user");
    }
    return (
        <div className="Footer-Saves">
            <Button color="#DFCB70" text="Saves" handleClick={handleSaves} />
        </ div>
    )
}

export const FooterControls = ({ view }: FooterControlsProps) => {
    const { setCatalogPageView } = useUserContext();
    return (
        <div style={{ width: "100%" }}>
            <div className="Footer-Container">
                {view === "catalog" &&
                    <FooterCatalog />
                }
                {(view === "saves" || view === "overview") &&
                    <FooterSaves />
                }
                {view === "catalog" &&
                    <div className="Footer-Catalog-Button">
                        <CatalogButton arrow="right" />
                    </div>
                }
                {view === "overview" &&
                    <div className="Footer-Catalog-Button">
                        <CatalogButton arrow="left" setView={() => setCatalogPageView("catalog")} />
                    </div>
                }
            </div>
        </div>
    )
}