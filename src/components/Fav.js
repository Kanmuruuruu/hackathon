import React, {useState, useEffect} from "react";
import './Favoris.css';

const Fav = () => {

    const task1 = "Ligne 1";
    const task2 = "Ligne 4";
    const task3 = "Ligne A";

    const [BusTable, setBusTable] = useState(["Ligne 1", "Ligne 4"]);


    const saveBus = () => {
        localStorage.setItem('BUS', JSON.stringify(BusTable))
    };

    let TramTable = ["Ligne A"];
    const saveTram = () => {
        localStorage.setItem('TRAM', JSON.stringify(TramTable))
    };

    let VeloTable = ["Parking1", "Parking2"];
    const saveVelo = () => {
        localStorage.setItem('VELO +', JSON.stringify(VeloTable))
    };

    let ParkingsTable = ["Parking1", "Parking2"];
    const saveParkings = () => {
        localStorage.setItem('PARKINGS', JSON.stringify(ParkingsTable))
    };

    let TicketsTable = ["Ticket W-E", "10 voyages"];
    const saveTickets = () => {
        localStorage.setItem('TICKETS', JSON.stringify(TicketsTable))
    };

    useEffect(()=>{
        saveBus();
    })


    let taskTable = [task1, task2, task3];

    const removeFav = () => {
        const removeFavElement = JSON.parse(localStorage.getItem('BUS'));
        console.log(removeFavElement);
        removeFavElement.splice(removeFavElement.length - 1, 1);
        console.log(removeFavElement);
        setBusTable(removeFavElement);
        localStorage.setItem('BUS', JSON.stringify(removeFavElement))
    };

        return (
            <div>
                <h1>VOS FAVORIS</h1>


                <h2>BUS</h2>
                {BusTable.map(task => (
                    <div className={"favoris"}>
                        <a href={"https://s3.cloud.actigraph.com/tao/upload/horaires_clients/TAO_HORAIRES_LIGNE_1.pdf?AWSAccessKeyId=tao&Expires=1576796399&Signature=ETVhwnB2glsNSByVVR9WpXz8rrU%3D&rand=137"}>{task}</a>
                        <button onClick={removeFav}>
                            <img src={require("../image/etoileNoire.png")} alt="une étoile vide"/>
                        </button>
                    </div>

                ))}


                <h2>TRAM</h2>

                {TramTable.map(task => (
                    <div className={"favoris"}>
                        <a href={"https://s3.cloud.actigraph.com/tao/upload/horaires_clients/modifications_horaires_4novembre/Tram_A_compressed.pdf?AWSAccessKeyId=tao&Expires=1576796399&Signature=%2Fh42M5Gn40unmqN6wqVBizZaNWQ%3D&rand=220"}>{task}</a>
                        <button onClick={removeFav}><img
                            src={require("../image/etoileNoire.png")} alt="une étoile vide"/>
                        </button>
                    </div>
                ))}


                <h2> VELO +</h2>
                {VeloTable.map(task => (
                    <div className={"favoris"}>
                        <a href={"https://www.reseau-tao.fr/48-Velo.html"}>{task}</a>
                        <button onClick={removeFav}><img
                            src={require("../image/etoileNoire.png")} alt="une étoile vide"/>
                        </button>
                    </div>
                ))}


                <h2>PARKINGS</h2>
                {ParkingsTable.map(task => (
                    <div className={"favoris"}>
                        <a href={"https://www.reseau-tao.fr/46-Parcs-Relais-Tram.html"}>{task}</a>
                        <button onClick={removeFav}><img
                            src={require("../image/etoileNoire.png")} alt="une étoile vide"/>
                        </button>
                    </div>
                ))}


                <h2>TICKETS</h2>
                {TicketsTable.map(task => (
                    <div className={"favoris"}>
                        <a href={"https://www.reseau-tao.fr/33-Les-tickets.html"}>{task}</a>
                        <button onClick={removeFav}><img
                            src={require("../image/etoileNoire.png")} alt="une étoile vide"/>
                        </button>
                    </div>
                ))}


            </div>
        )
    };


    export default Fav;