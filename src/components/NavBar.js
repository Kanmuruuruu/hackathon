import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className="header">
            <NavLink activeClassName="active" to="/search">
                <img src={require("../image/streamline-icon-house-1@40x40.png")} alt=""/>
            </NavLink>
            <NavLink activeClassName="active" to="/client">
                <img src={require("../image/streamline-icon-lock-unlock-1@40x40.png")} alt=""/>
            </NavLink>
            <NavLink activeClassName="active" to="/mobilite">
                <img src={require("../image/streamline-icon-gmo-food-leaf-dna@40x40.png")} alt=""/>
            </NavLink>
            <NavLink activeClassName="active" to="/favoris">
                <img src={require("../image/etoileNoir.png")} alt=""/>
            </NavLink>
        </div>
    );
}

export default NavBar;