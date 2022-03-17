import React from "react";
import Kisan from "./images/newKisan.jpg";
import GooglePlay from "./images/google_play.png";
import Credit from "./credit";
import Graph from "./graph";


function Main1(){

    return (
        <div className="main1">
            <div className="main1_part1">
                <h1>Fullfill all</h1>
                <h2>your dreams now...</h2>
                <p>With our neo banking platform that aims to 
                    include every credit-worthy individual  under the financial umbrella.Download <strong>Avail finance</strong>app for <strong>quick personal loans,insurance,instant cash and more !</strong>
                </p>
                <h4>Download the app in</h4>
                <img src={GooglePlay} />
            </div>
            <div className="main1_part2">
                <img src={Kisan} />
            </div>
            <Credit/>
            <Graph/>
        </div>
    )
}


export default Main1