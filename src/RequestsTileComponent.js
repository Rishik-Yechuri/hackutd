import React, {useEffect, useMemo, useRef, useState} from 'react';
import deny from "./xmark.png";
import accept from "./checkmark.png";
import './RequestTileStyle.css';

const RequestsTileComponent = ({state, algoState, buttonState, setState, resetState}) => {

    return (
        <div>
            <div id={"acceptornot"}>
                <div id={"requestText"}>
                    Srinesh
                </div>
                <div id={"spaceDiv"}></div>
                <div>
                    <img className={"itemImg"} src={accept} width={"30em"} id={"startingArrow"}/>
                </div>
                <div id={"spaceDiv2"}></div>
                <div>
                    <img className={"itemImg"} src={deny} width={"30em"} id={"startingArrow"}/>
                </div>
            </div>
            <hr className={"regSplitter"}></hr>
        </div>
    );
}
export default RequestsTileComponent;