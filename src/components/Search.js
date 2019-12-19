import React, {useState, useEffect} from 'react';
import './Search.css';


function returnString(readable){  // Return an array with the string to make a perfectly readable sentence.
    let string="";
    for (let [key, value] of Object.entries(readable)) {
        string+=',';
        if(value===0){}
        else
        if(value>1){
            string+=value+" "+key+"s";
        }
        else{
            string+=value+" "+key;
        }
    }
    return string.split(",").filter( val => { return val !== ''});
}


//Because I like complicate my life :D

function formatDuration (reste) {
    if(reste===0){return "now";}
    const readable = {
        year:0,
        day:0,
        hour:0,
        minute:0,
        seconde:0,
    }
    while(reste>=31536000){
        readable.year++;
        reste-=31536000;
    }
    while(reste>=86400){
        readable.day++;
        reste-=86400;
    }
    while(reste>=3600){
        readable.hour++;
        reste-=3600;
    }
    readable.minute=Math.floor(reste/60);
    readable.seconde=reste%60;
    const aux = returnString(readable);
    //Make sure to add "," and "and" whe it's necessary.
    let res="";
    for(let i=0; i <aux.length; i++){
        if(i===aux.length-1 && i!==0){
            res+=" et "+aux[i];
        }
        else{
            res+=aux[i];
            if(i<aux.length-2){
                res+=", ";
            }
        }
    }
    return res;
}

const Search = () => {

    const [coordonnees,setCoordonnees] = useState({
        lat: "1.90392",
        long:"47.90243"
    });
    const [itineraire, setItineraire] = useState([]);
    const [perturbation, setPerturbation] =useState([]);


    const getDuree = duree => {
        return formatDuration(duree);
    }

    const getHeure = h => {
        const heure = h.split('T')[1];
        return (<p>{heure[0]+heure[1]} H {heure[2]+heure[3]} M</p>)
    }

    /*
    const getCoordonnees = async adresse => {
        console.log("google");
        const response = await fetch("http://maps.googleapis.com/maps/api/geocode/json?address=546%20rue%20Baruch%20de%20Spinoza,%20Avignon&sensor=false", {headers: {Authorization: 'AIzaSyCbVcBeID8mWQpln23lcSM_1spP5BEP47w'}});
        const data = await response.json();
        console.log(data);
    }
    */

    const getItineraire = async () => {
        console.log(coordonnees);
        const lat=coordonnees.lat;
        const long=coordonnees.long;
        const response = await fetch("https://api.navitia.io/v1/coverage/fr-cen/journeys?from=1.89473%3B47.89386&to="+lat+"%3B"+long+"&",{headers: {Authorization: 'a3653e1d-06a1-4edc-b768-c9bd561d3251'}});
        const data = await response.json();
        setPerturbation(data.disruptions);
        setItineraire(data.journeys[0].sections);
    }

    const renduIt = (index,it) => {
        console.log(it);
        switch (it.type) {
            case "street_network":
                return (
                    <div key={index} className="marche">
                        <p>Marche</p>
                        {getDuree(it.duration)}
                        <div>Heure d'arrivée : {getHeure(it.arrival_date_time)}</div>
                    </div>);
            case "public_transport":
                return(
                    <div key={index} className="transport">
                        <p>Transport</p>
                        {getDuree(it.duration)}
                        <p>CO2 : {it.co2_emission.value} {it.co2_emission.unit}</p>
                        <div>
                            <p className="ligne">{it.display_informations.code}</p>
                            <p>Direction : {it.display_informations.direction}</p>
                            <div>Heure d'arrivée : {getHeure(it.arrival_date_time)}</div>
                        </div>
                    </div>);
            case "transfert":
                return (
                    <div>
                        Transfert : Marche / Attente
                    </div>
                );
            default:
                return "Pas configurer encore";
        }
    }

    useEffect(()=>{
        getItineraire();
    }, [coordonnees])

    const changeCoordonnees = e => {
        e.preventDefault();
        const newCoord = {
        lat :(document.getElementById("lat").value),
        long : (document.getElementById("long").value)};
        setCoordonnees(newCoord);
    }

    return (
      <div>
          <form onSubmit={changeCoordonnees}>
              <input id="lat" type="text" placeholder="latitude"/>
              <input id="long" type="text" placeholder="longitude"/>
              <button type="submit">Chercher un itinéraire</button>
          </form>

              {perturbation ?
                  <div className="perturbation">
                      {perturbation.map( (pert,index) => {
                          return(
                              <div>
                                Status : {pert.status==="active" ? "OK" : pert.status}
                              </div>
                          );
                      })}
                  </div>
                  :
                  null
              }
              {itineraire ?
                  itineraire.map( (it,index) => renduIt(index,it))
                  :
                  null
              }

      </div>
    );
}


export default Search;