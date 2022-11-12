import React, {useEffect, useMemo, useRef, useState} from 'react';


const HistoryTileComponent = ({state}) => {
    useEffect(() => {
        document.getElementById("mainTextHistoryTile").textContent = state;
    }, [state]);
    return (
        <div >
            <div id={"mainTextHistoryTile"}>Meet at Fuckbuddy Convention</div>
            <hr></hr>
        </div>
    );
}
export default HistoryTileComponent;