import React from 'react';
import Contact from './Contact';
import Fav from './Fav';
import Mobilit from './Mobilit.js';
import CompteClient from './CompteClient.js';

const Home = () => {
    return(
        <div>
            <Contact/>
                <Fav/>
            <Mobilit/>
            <CompteClient/>
        </div>
      );
  
  export default Home;