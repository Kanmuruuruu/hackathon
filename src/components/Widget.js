import React from 'react';
import './Widget.css';


const Widget = () => {
    return (
        <div className="widget">
            <a href="https://www.reseau-tao.fr/48-Velo.html">
                <img src={require("../image/streamline-icon-biking-person@40x40.png")} alt=""/>
            </a>
            <a href="https://www.reseau-tao.fr/27-Bus.html">
                <img src={require("../image/streamline-icon-truck-2@40x40.png")} alt=""/>
            </a>
            <a href="https://www.reseau-tao.fr/45-Tram.html">
                <img src={require("../image/streamline-icon-cable-car-1@40x40.png")} alt=""/>
            </a>
            <a href="https://www.reseau-tao.fr/46-Parcs-Relais-Tram.html">
                <img src={require("../image/streamline-icon-parking-p-1@40x40.png")} alt=""/>
            </a>
            <a href="https://www.reseau-tao.fr/33-Les-tickets.html">
                <img src={require("../image/streamline-icon-transportation-ticket-train@40x40.png")} alt=""/>
            </a>
        </div>
    );
}

export default Widget;