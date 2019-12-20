import React from 'react'

const NavBar = () => {
    return (
        <div className="header">
            <a href="http://www.google.com">
                <img src={require("../image/streamline-icon-house-1@40x40.png")} alt=""/>
            </a>
            <a href="http://www.google.com">
                <img src={require("../image/streamline-icon-lock-unlock-1@40x40.png")} alt=""/>
            </a>
            <a href="http://www.google.com">
                <img src={require("../image/developmentdurable.png")} alt=""/>
            </a>
            <a href="http://www.google.com">
                <img src={require("../image/etoileNoir.png")} alt=""/>
            </a>
        </div>
    );
}

export default NavBar;