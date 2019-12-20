import React, {useState, useEffect} from 'react';
import './Search.css';
import NavBar from "./NavBar";
import Widget from "./Widget";


function returnString(readable) {  // Return an array with the string to make a perfectly readable sentence.
    let string = "";
    for (let [key, value] of Object.entries(readable)) {
        string += ',';
        if (value === 0) {
        } else if (value > 1) {
            string += value + " " + key + "s";
        } else {
            string += value + " " + key;
        }
    }
    return string.split(",").filter(val => {
        return val !== ''
    });
}


//Because I like complicate my life :D

function formatDuration(reste) {
    if (reste === 0) {
        return "now";
    }
    const readable = {
        year: 0,
        day: 0,
        hour: 0,
        min: 0,
        sec: 0,
    }
    while (reste >= 31536000) {
        readable.year++;
        reste -= 31536000;
    }
    while (reste >= 86400) {
        readable.day++;
        reste -= 86400;
    }
    while (reste >= 3600) {
        readable.hour++;
        reste -= 3600;
    }
    readable.min = Math.floor(reste / 60);
    readable.sec = reste % 60;
    const aux = returnString(readable);
    //Make sure to add "," and "and" whe it's necessary.
    let res = "";
    for (let i = 0; i < aux.length; i++) {
        if (i === aux.length - 1 && i !== 0) {
            res += " et " + aux[i];
        } else {
            res += aux[i];
            if (i < aux.length - 2) {
                res += ", ";
            }
        }
    }
    return res;
}

const Search = () => {

    const [coordonnees, setCoordonnees] = useState({
        lat: "", // 1.90392
        lng: "" // 47.90243
    });

    const [perturbation, setPerturbation] = useState([]);
    const [journeys, setJourneys] = useState([]);


    const getDuree = duree => {
        return formatDuration(duree);
    }

    const getHeure = h => {
        const heure = h.split('T')[1];
        return (<p>: {heure[0] + heure[1]}:{heure[2] + heure[3]}</p>)
    }

    const getItineraire = async () => {
        const lat = coordonnees.lng;
        const lng = coordonnees.lat;
        const response = await fetch("https://api.navitia.io/v1/coverage/fr-cen/journeys?from=1.89473%3B47.89386&to=" + lat + "%3B" + lng + "&", {headers: {Authorization: 'a3653e1d-06a1-4edc-b768-c9bd561d3251'}});
        const data = await response.json();
        setPerturbation(data.disruptions);
        setJourneys(data.journeys);
    }

    const renduIt = (index, it) => {
        switch (it.type) {
            case "street_network":
                return (
                    <div key={index} className="marche">
                        <h1>Marche</h1>
                        <p>{it.to.name}</p>
                        {getDuree(it.duration)}
                        <div className="arrivee">Arrivée {getHeure(it.arrival_date_time)}</div>
                    </div>);
            case "public_transport":
                return (
                    <div key={index} className="transport">
                        <h1>Transport</h1>
                        {getDuree(it.duration)}
                        <p>CO2 : {Math.floor(it.co2_emission.value)} {it.co2_emission.unit} CO2</p>
                        <div>
                            <p className="ligne">{it.display_informations.code}</p>
                            <p>Direction : {it.display_informations.direction}</p>
                            <div className="arrivee">Arrivée {getHeure(it.arrival_date_time)}</div>
                        </div>
                    </div>);
            case "transfer":
                return (
                    <div key={index} className="marche">
                        <h1>Transfert</h1>
                        {getDuree(it.duration)}
                        <p>{it.to.name}</p>
                    </div>
                );
            case "waiting":
                return (
                    <div key={index} className="marche">
                        <h1>Attendre</h1>
                        {getDuree(it.duration)}
                    </div>
                );
            default:
                return "Pas configurer encore";
        }
    }

    useEffect(() => {
        console.log("bonjour Monsieur")
        getItineraire();
    }, [coordonnees])

    const changeCoordonnees = async e => {
        e.preventDefault();
        const adres = (document.getElementById("adresse").value);
        adres.replace(" ","%");
        const response= await fetch("https://api.opencagedata.com/geocode/v1/json?q="+adres+"&key=e48ab858fd614c98a063d2ba25df67ca&language=fr&pretty=1");
        const data = await response.json();
        console.log(data.results[0]);
        let newCoord = data.results[0].geometry;
        console.log(newCoord);
        setCoordonnees({...newCoord});
    }

    return (
        <div className="SearchWidget">
            <div>
                <form onSubmit={changeCoordonnees}>
                    <input id="adresse" type="text" placeholder="Destination"/>
                    <button className="buttonForm" type="submit">Chercher un itinéraire</button>
                </form>

                {perturbation.length ?
                    <div className="perturbation">
                        <h2>Perturbation</h2>
                        <div>
                            {perturbation.map((pert, index) => {
                                return (
                                    <div className="flex" key={index}>
                                        <div style={{color: pert.severity.color}}>
                                            {pert.status.toUpperCase()}
                                        </div>
                                        {pert.cause.toLowerCase()}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    :
                    null
                }
                {
                    journeys ?
                        <div className="">
                            {journeys.map((j, index) => {
                                const it = j.sections;
                                console.log(it);
                                return (
                                    <div className="trajet" key={index}>
                                        <h2>Trajet {index + 1}</h2>
                                        {it.map((it, index) => renduIt(index, it))}
                                    </div>
                                );
                            })
                            }
                        </div>
                        :
                        null
                }
            </div>
            <Widget/>
        </div>
    );
}


export default Search;