import React from "react";
import { Link } from "react-router-dom";
import Navbarco from "../NavBar/Navbarconnected";
import Footer from "../NavBar/Footer";


function Homeco() {
    return (

        <div>
            <Navbarco />

            <div>
                <button>
                    <Link to='/servercreate'>Créer un serveur</Link>
                    <Link to='/serverjoin'>rejoindre un serveur</Link>
                </button>
            </div>
            <Footer />

        </div>



    )
}
export default Homeco