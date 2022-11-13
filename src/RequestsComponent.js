import React, {useEffect, useMemo, useRef, useState} from 'react';
import RequestsTileComponent from "./RequestsTileComponent";


const RequestsComponent = ({state}) => {
    let items = [
        ["A", 2,4],
        ["A", 3,4],
        ["B", 6,1],
        ["A", 2,5],
        ["C", 4,5],
        ["Q", 0,0],
        ["P", 7,12],
        ["U", 4,3],
        ["H", 6,6],
        ["A", 6,1],
        ["C", 4,0],
        ["K", 6,6],
        ["U", 6,1],
        ["T", 4,0],
        ["D", 7,4]
    ];
    var hashMap = new Map();
   // alert(hashMap.get('LLil'));
    for(var x=0;x<items.length;x++){
        var pulledString = items[x][0];
        if(hashMap.get(pulledString) === undefined){
            hashMap.set(pulledString,1);
        }else{
            hashMap.set(pulledString,hashMap.get(pulledString) + 1);
        }
    }
   // alert("HERE");
    for (const x of hashMap.entries()) {
        //x[0] is the key
        //x[1] is the value
      //  alert("x0:" + x[0] + " x1:" + x[1]);
        if(x[1] > 1){
           // alert(x[0] + " is LIT");
        }
    }
    return (
        <div>
        <RequestsTileComponent></RequestsTileComponent>
        </div>
    );
}
export default RequestsComponent;