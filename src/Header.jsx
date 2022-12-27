import React from "react";
import logo from "./img/logo.png"


function Header () {
    return <div className="header">
        <img className="logo" src={logo} />
        <h1 className="header-baslik">Okey Kart Oyunu</h1>
    </div>
}

export default Header;