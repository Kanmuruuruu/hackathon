
import React from 'react';
import Home from './components/Home';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Mobilit from "./components/Mobilit";
import CompteClient from "./components/CompteClient";
import Fav from "./components/Fav";
import Search from "./components/Search";
import NavBar from "./components/NavBar";
import Widget from "./components/Widget";

function App() {
  return (
    <div className="App">
        <NavBar />
        <Switch>
            <Route path="/search" component={Search}/>
            <Route path="/mobilite" component={Mobilit}/>
            <Route path="/client" component={CompteClient}/>
            <Route path="/favoris" component={Fav}/>
        </Switch>
    </div>

  );
}

export default App;
