import React from 'react';
import './CompteClient.css';

function CompteClient() {
  return (
    <div className="Compte">
      <div className="ImgCClient">
      </div>
      <div className="Title">
        <h1>Compte Client</h1> 
      </div>
      <div className="Login">
        <h2>Nom: JEAN</h2>
        <h2>Prénom: Arthur</h2>
        <h2>Adresse: 150 avenue du Bonheur 45000 ORLEANS</h2>
      </div>
      <div className="QRCode">
        <img src={require(`../images/QR-Code-TAO.png`)}/>
      </div>
      <div className="Pieton">
        <li>
          <button><img src={require(`../images/Marcheur.png`)}></img></button>
        </li>       
        <li>
          <button><img src={require(`../images/Velo.png`)}/></button>
        </li>  
        <li>
          <button><img src={require(`../images/Transports.png`)}/></button>
        </li>
        <li>
          <button><img src={require(`../images/Parking.png`)}/></button>
        </li>
      </div>       
      <div className="NbPoints">
        <h1>Nombre de points TAO accumulés :</h1>
      </div>
      <div className="TotalPoints">
        <h1>10</h1>
      </div>
    </div>
  );
}

export default CompteClient;