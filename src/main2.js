import React from "react";
import HussleFree from "./hussleFree";
import Delivery from "./images/delivery.jpg";
import Quick from "./quick";
import Paperless from "./paperless";


function Main2(){

    return(
        <div className="main2">
            <div className="main2_part1">
                <img src={Delivery} />
            </div>
            <div className="main2_part2">
                <h2>More than a </h2>
                <h1>numbers game </h1>
                <li>Are you in need of quick funds to meet a month-end cash crunch</li>
                <li>Or do you need instant cash to pay your utility bills or insurance premium?</li>
                <li>Have you running around to get an instant loan in face of an emergency situation?</li>
                <p>Well we are now here to help you meet such <strong>divert short-term credit needs with our plethora of financial products</strong> </p>
                <p>What's more is that our application process is <strong>quick,paperless and hustle free,</strong> and we help you to build a valuable credit history trough timely simple payment.</p>
               
            </div>
            <Quick/>
            <HussleFree/>
            <Paperless/>
        </div>
    )
}


export default Main2