import React from "react";
import GraphImg from "./images/creditNew.png"

function Graph(){
    return (
        <div className="graph">
            <img src={GraphImg}/>
            <p>Structure of Reshma's payments</p>
        </div>
    )
}

export default Graph