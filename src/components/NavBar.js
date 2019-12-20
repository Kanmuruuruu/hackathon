import React from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';
import Fav from './Fav';
import Home from './Home';
import Mobilit from './Mobilit';
import CompteClient from "./CompteClient"

const NavBar = () => {
    return (
        <div className="header">
            <NavLink to="/">
                <img src={require("../image/streamline-icon-house-1@40x40.png")} alt=""/>
            </NavLink>
            <NavLink to="/client">
                <img src={require("../image/streamline-icon-lock-unlock-1@40x40.png")} alt=""/>
            </NavLink>
            <NavLink to="/mobilite">
                <img src={require("../image/streamline-icon-gmo-food-leaf-dna@40x40.png")} alt=""/>
            </NavLink>
            <NavLink to="/favoris">
                <img src={require("../image/etoileNoir.png")} alt=""/>
            </NavLink>
        <Switch>
            <Route exact path="/" components={Home}/>
            <Route path="/favoris" components={Fav} />
            <Route path="/mobilite" components={Mobilit}/>
            <Route path="/client" components={CompteClient}/>
        </Switch>
        </div>
    );
}

export default NavBar;