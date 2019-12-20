import React from 'react';
import './Mobilit.css';

function Mobilit() {
  return (
    <div className="Font">
      <div className="Defi">
        
      </div>
      <div className="Mobilite">
        <h1>Mobilité Responsable</h1>
      </div>
      <div className="Title">
        <h2>Et si vous aussi vous oeuvriez pour la planète</h2>
      </div>
      <div className="Text">
        <p>Keolis vous propose de réaliser des défis 
          responsable bons pour la planète, 
        votre santé et votre porte-monnaie</p>
        <p>En comptabilisant vos déplacements réalisés à vélo, à pied ou en transport en commun mais aussi votre utilisation des parkings relais</p>
      </div>
      <div className="Challenge">
        <h3>4 Défis vous sont proposez vous permettant de collecter des points TAO</h3> 
      </div>
      <div className="DefiName">
          <li>Le "DEFI PED"</li>
            <p className="Compteur">A chaque kilomètre parcouru à pied obtenez 1 point TAO</p>
          <li>Le "DEFI VEL"</li>
            <p className="Compteur">Tous les 10 kilomètres parcourus en vélo obtenez 10 points TAO</p>
          <li>Le "DEFI FLEX"</li>
            <p className="Compteur">Tous les 10 compostages de tickets obtenez 5 points TAO</p>
          <li>Le "DEFI PARK+"</li>
            <p className="Compteur">Toutes les 3 utilisations de l'un de nos parking relais obtenez 2 points TAO</p>
      </div>
      <div className="Points">  
        <h4>Les points TAO sont échangeables contre</h4>
      </div>
      <div className="Echange">
          <p>Des réductions sur les différents trajets ou abonnement TAO</p>
          <p>Des paniers de légumes et fruits négociés avec des maraîchers locaux</p>
          <p>Des produits de premières nécessités négociés avec nos enseignes partenaires</p>
      </div>
      <div className="Explication">
        <h5>Si vous souhaitez participer à l'un ou à plusieurs défis KAOLIS, merci de bien vouloir vous enregistrer pour valider votre participation</h5>
      </div>
    </div>
  );
}

export default Mobilit;
