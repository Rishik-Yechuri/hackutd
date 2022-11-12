import React, {useEffect, useMemo, useRef, useState} from 'react';
import HistoryTileComponent from "./HistoryTileComponent";


const HistoryComponent = () => {
    const [state,setState] = useState("sup");
    alert("State:" + state);
    //setState(!state);
    //this.state = 1;
//setState(1);
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
    const handleClick = (e) => {
        e.preventDefault();
        alert(state);
        setState("Puss");
      // alert("GANGS");

    }
    return (
        <div onClick={handleClick} >
         <HistoryTileComponent state={state}></HistoryTileComponent>
        </div>
    );
}
export default HistoryComponent;