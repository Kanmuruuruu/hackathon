import React from 'react';
import './Mobilit.css';

function Mobilit() {
  return (
    <div className>
      <div className="Defi">

      </div>
      <div className="Mobilite">
        <h1>Mobilité Responsable</h1>
      </div>
      <div className="Title">
        <p>Keolis vous propose de réaliser des défis responsables</p>
        <p>Et si vous aussi vous oeuvriez pour la planète</p>
      </div>
      <div className="Text">
        <p>Comptabilisez vos déplacements à vélo à pied en transport en commun mais aussi l'utilisation des parkings relais</p>
      </div>
      <div className="Challenge">
        <h3>4 Défis => Points TAO</h3> 
      </div>
      <div className="DefiName">
          <li>
            <img src={require(`../images/Marcheur.png`)}/>
            <h4>DEFI PED</h4>
            <p className="Compteur">1 Pied=1 point TAO</p>
          </li>
          <li>
            <img src={require(`../images/Velo.png`)}/> 
            <h4>DEFI VELO+</h4>
              <p className="Compteur">10 Vélo=10 points TAO</p>           
          </li>
          <li>
            <img className="img" src={require(`../images/Transports.png`)}/> 
            <h4>DEFI FLEX</h4>
            <p className="Compteur">10 QRCode=5 points TAO</p>         
          </li>
          <li>
            <img src={require(`../images/Parking.png`)}/> 
            <h4>DEFI PARK+</h4>
            <p className="Compteur">3 Parkings=2 points TAO</p>        
          </li>
      </div>
      <div className="Points">  
        <h4>Les points TAO sont échangeables</h4>
      </div>
      <div className="Echange">
        <li>
          <img className="img2" src={require(`../images/Ticket.png`)}/> 
          <p>Des réductions sur les différents trajets ou abonnement TAO</p>
        </li>
        <li>
          <img className="img2" src={require(`../images/Panier.png`)}/> 
          <p>Des paniers de légumes et fruits négociés avec des maraîchers locaux</p>
        </li>
        <li>
          <img className="img2" src={require(`../images/Brush.png`)}/> 
          <img className="img2" src={require(`../images/Bib.png`)}/>     
          <img className="img2" src={require(`../images/Couverts.png`)}/> 
          <p>Des produits de premières nécessités négociés avec nos enseignes partenaires</p>
        </li>
      </div>
      <div className="Explication">
        <p>Si vous souhaitez participer à un ou à plusieurs défis KEOLIS, merci de bien vouloir vous enregistrer pour valider votre participation</p>
      </div>
    </div>
  );
}

export default Mobilit;
