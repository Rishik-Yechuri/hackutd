import React, {useEffect, useMemo, useRef, useState} from 'react';
import "./HistoryTileStyle.css"


const HistoryTileComponent = ({state}) => {
   /* useEffect(() => {
        document.getElementById("mainTextHistoryTile").textContent = state;
    }, [state]);*/
    return (
        <div>
            <div id={"mainTextHistoryTile"}>{state}</div>
            <hr className={"regSplitter"}></hr>
        </div>
    );
}
export default HistoryTileComponent;