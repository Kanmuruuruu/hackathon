import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="Contact">
      <div className="ImgContact">

      </div>
      <div>
        <h1>Connectez-vous</h1>
        <label htmlFor="title">Email</label>
        <input id="email" type="text"></input>
      <div>
        <label htmlFor="title">Mot de passe</label>
        <input id="mot de passe" type="text"></input>
      </div>
      <div>
        <label htmlFor="title">Numéro Client</label>
        <input id="Numéro Client" type="text"></input>
      </div>
      <div>
        <label htmlFor="title">Numéro Client</label>
        <input id="Numéro de Carte" type="text"></input>
      </div>
      <div className="Button">
        <button>Connexion</button>
      </div>


      </div>

    </div>
  );
}

export default Contact;