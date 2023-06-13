import React from "react";
import { Link } from "react-router-dom";

function Footer(){
    return(
        <nav>
            <Link to='/about'>A propos</Link>
            <Link to='/safety'>Sécurité</Link>
            <Link to='/licenses'>Licences</Link>
            <Link to='/ext'>Extension</Link>
            {/* <Link to='/insta'><img href="" alt=""></img></Link>
            <Link to='/twitter'><img href="" alt=""></img></Link>
            <Link to='/ytb'><img href="" alt=""></img></Link>
             */}
            
            

        </nav>
    )
}

export default Footer 