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
        ["A", 6,6],
        ["B", 6,1],
        ["Z", 4,0],
        ["Y", 7,4]
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
   // alert("EBGIYUWHEBIGFK");
    function Header() {
        //alert("State:" + state);
        return <HistoryTileComponent state={"soon"}></HistoryTileComponent>;
    }
   // alert("FUCK");
    const threeHeaders = Array.from({length: 3}, (_, index) => {
       // return <Header key={index} />;
        //alert("Place in Items:" + items2[index][0]);
        return <HistoryTileComponent state={items[index][0]}></HistoryTileComponent>;
    });
   // alert(threeHeaders);

    return (
        <div id={"mainPieceHistory"}  >
            {threeHeaders}
        </div>

    );
}
export default HistoryComponent;