import React from 'react';
import { Link } from 'react-router-dom'
import Searchbar from '../SearchBar/Searchbar';

function Navbar(){
    return(
        <nav>
            <img src="" alt="logo_site"></img>
            
            <Link to='/inscription'>S'inscrire</Link>
            <Link to='/download'>Télécharger</Link>
            <Link to='/help'>Aide</Link>
            <Link to='/support'>Support</Link>
            <Searchbar />
        </nav>
    );
}

export default Navbar