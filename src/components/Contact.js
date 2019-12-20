import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="Contact">


            <div className={"email"}>

                <label htmlFor="title">Identifiants </label>
                <input id="email" type="text"></input>
            </div>
            <div className={"mdp"}>
                <label htmlFor="title">Mot de passe </label>
                <input id="mot de passe" type="text"></input>
            </div>

            <div className={"Button"}>
                <button>Connexion</button>
            </div>


        </div>
    );
}

export default Contact;