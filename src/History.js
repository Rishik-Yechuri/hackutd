import React, {useEffect, useMemo, useRef, useState} from 'react';
import HistoryTileComponent from "./HistoryTileComponent";


const HistoryComponent = () => {
    const [state,setState] = useState("sup");
    let items = [
        ["A", 2,4],
        ["A", 3,4],
        ["B", 6,1],
        ["A", 2,5],
        ["C", 4,5],
        ["Q", 0,0],
        ["P", 2,1],
        ["U", 4,3],
        ["H", 6,6],
        ["A", 6,1],
        ["C", 4,0],
        ["K", 6,6],
        ["U", 6,1],
        ["T", 4,0],
        ["D", 7,4]
    ];
    let items2 = [
        ["A", 2,4],
        ["B", 3,4],
        ["C", 6,1],
        ["D", 2,5],
        ["E", 4,5],
        ["F", 0,0],
        ["G", 2,1],
        ["H", 4,3],
        ["I", 6,6],
        ["J", 6,1],
        ["K", 4,0],
        ["L", 7,4]
    ];
    function Header() {
        return <HistoryTileComponent state={"soon"}></HistoryTileComponent>;
    }
    const threeHeaders = Array.from({length: items.length}, (_, index) => {
        var stringToPass = items[index][0] + " seen at (" + items[index][1] + ", " + items[index][2] + ")";
        return <HistoryTileComponent state={stringToPass} ></HistoryTileComponent>;
    });
    return (
        <div id={"mainPieceHistory"}  >
            {threeHeaders}
        </div>

    );
}
export default HistoryComponent;