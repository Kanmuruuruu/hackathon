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
      <div className="QRCode">
        <img src={require(`../images/QR-Code-TAO.png`)}/>
      </div>
      <div className="Pieton">
        <li><img src={require(`../images/Marcheur.png`)}/></li>       
        <li><img src={require(`../images/Velo.png`)}/></li>  
        <li><img src={require(`../images/Transports.png`)}/></li>
        <li><img src={require(`../images/Parking.png`)}/></li>
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