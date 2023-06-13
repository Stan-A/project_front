import React from "react";


function Searchbar(){
    return (
      <form>
        <input type="text" placeholder="Utilisateur ou serveur" />
        <input type="submit" value="Rechercher"></input>
      </form>
    );
  };

export default Searchbar