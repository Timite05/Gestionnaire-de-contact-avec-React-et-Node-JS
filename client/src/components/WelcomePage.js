import React, { useState, useEffect } from 'react';
import '../App.css';

import ListeContactPage from './ListeContactPage';

export default function WelcomePage(){

    const [showSecondPage, setShowSecondPage] = useState(false);
    useEffect(() => {
        // un timer qui declenche setShowSecondPage aprés 2 secondes
        const timer = setTimeout(() => {
          setShowSecondPage(true);
        }, 2000); // Transition après 3 secondes
    // si besoin d'annuler le timeOut avant qu'il n'existe
        return () => clearTimeout(timer);
      }, []);

      if (showSecondPage) {
        return <ListeContactPage/> ;
      }

    return(
        <>
      <div className="App">
      <header className="App-header">
        <img 
          src="/outils.png"
          alt="Outils" 
          style={{ width: '300px', height: 'auto' }} 
        />
        <h1
         style={{ color: '#303030' }}
         ><strong>Gérer Vos Contacts</strong></h1>
      </header>
    </div>
        </>
    )
}