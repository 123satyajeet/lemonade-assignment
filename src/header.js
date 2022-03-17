import React from "react";
import Avail from "./images/avail.png"

function Header(){

    return (<>
    <div className="header">
        <img className="Avail_Img" src={Avail}  />
        <h4>PRODUCTS</h4>
        <h4>RESOURCES</h4>
        <h4>ABOUT US</h4>
        <h4>KNOWLEDGE CENTER</h4>
        <h4>CONTACT</h4>

    </div>
    </>)
}

export default Header