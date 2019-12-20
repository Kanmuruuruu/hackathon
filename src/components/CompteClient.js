import React , {useState} from 'react';
import Widget from './Widget';
import './CompteClient.css';

function CompteClient() {

    const [compteur,setCompteur] = useState(0)

    const setScore = event => {
        setCompteur(compteur+parseInt(event.target.id));
    }

  return (
    <div className="Compte">
      <div className="Title">
        <h1>Compte Client</h1> 
      </div>
      <div className="Login">
          <img className="Avatar" src={require("../images/avatar.png")}/>
          <p>Nom: Green </p>
          <p>Prénom: Tom </p>
          <p>Adresse: 150 avenue du Bonheur 45000 ORLEANS</p>
      </div>
      <div className="QRCode">
        <img src={require(`../images/QR-Code-TAO.png`)}/>
      </div>
        <div className="Pieton">
            <div className="Icone-li">
                  <li>
                      <img onClick={setScore} id="1" src={require(`../images/Marcheur.png`)}></img>
                  </li>
                  <li>
                      <img onClick={setScore} id="10" src={require(`../images/Velo.png`)}/>
                  </li>
                  <li>
                      <img onClick={setScore} id="5" src={require(`../images/Transports.png`)}/>
                  </li>
                  <li>
                      <img onClick={setScore} id="2" src={require(`../images/Parking.png`)}/>
                  </li>
            </div>
            <div className="Compteur">
                <p>Nombre de points TAO accumulés : <span className="compteurnombre">{compteur}</span></p>
            </div>
        </div>
    <Widget />
    </div>
  );
};

export default CompteClient;