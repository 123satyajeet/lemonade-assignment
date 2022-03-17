import React from "react";
import CreditImg from "./images/credit.png"


function Credit(){

    return (
        <div className="credit">
            <img src={CreditImg}/>
            <p>Reshma singh's credit score is <strong>7500</strong></p>
        </div>
    )
}

export default Credit