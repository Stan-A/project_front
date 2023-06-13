import React from 'react';
import {Link} from 'react-router-dom';
import Searchbar from '../SearchBar/Searchbar';
import Footer from './Footer';

function Navbarco(){
    return(
        <div>
        <nav>
            <img src="" alt="logo_site"></img>
            <Link to='/profile'>Profile</Link>
            <Link to='/'>Se déconnecter</Link>
            <Link to='/download'>Télécharger</Link>
            <Link to='/help'>Aide</Link>
            <Link to='/support'>Support</Link>
            <Searchbar />
        </nav>

        <h1>Nombre de serveurs : </h1>
        <div>
        <button>Créer un serveur</button>
        <button>Rejondre un serveur</button>
        </div>

        <Footer />

        </div>

        
    );
}

export default Navbarco