import React from "react";
import { ReactComponent as AcousticGuitar } from '../../svgs/acoustic-guitar.svg';
import { ReactComponent as HairMetal } from '../../svgs/hair-metal.svg';
import { ReactComponent as Headphones } from '../../svgs/headphones.svg';
import { ReactComponent as DiscoBall } from '../../svgs/disco-ball.svg';

type IconBackgroundProps = {
    saved?: boolean;
    genres?: string[];
    color?: string;
    scale?: number;
}

export const IconBackground = ({ genres, saved = false, color, scale }: IconBackgroundProps) => {
    if (genres === undefined) {
        return null;
    }

    const iconDefualtColor = saved ? "#DFCB70" : "#FFF";
    const iconDefeaultOpacity = saved ? .75 : .5;
    const heightWidth = scale ? `${scale * 90}px` : "90px";

    const firstGenre = genres[0]
    return (
        <div className="Icon-Background">
            {firstGenre === "Folk" || firstGenre === "Country" && <AcousticGuitar style={{ height: heightWidth, width: heightWidth, right: -20, bottom: 10, position: "absolute", fill: `${color ? color : iconDefualtColor}`, opacity: `${color ? .3 : iconDefeaultOpacity}`, zIndex: 0 }} />}
            {firstGenre === "Rock" && <HairMetal style={{ height: heightWidth, width: heightWidth, right: -20, bottom: 10, position: "absolute", fill: `${color ? color : iconDefualtColor}`, opacity: `${color ? .3 : iconDefeaultOpacity}`, zIndex: 0 }} />}
            {firstGenre === "Pop" || firstGenre === "Dance" && <Headphones style={{ height: heightWidth, width: heightWidth, right: -20, bottom: 10, position: "absolute", fill: `${color ? color : iconDefualtColor}`, opacity: `${color ? .3 : iconDefeaultOpacity}`, zIndex: 0 }} />}
            {firstGenre === "R&B" && <DiscoBall style={{ height: heightWidth, width: heightWidth, right: -20, bottom: 10, position: "absolute", fill: `${color ? color : iconDefualtColor}`, opacity: `${color ? .3 : iconDefeaultOpacity}`, zIndex: 0 }} />}
        </div>
    )
}