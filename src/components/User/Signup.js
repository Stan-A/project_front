import React, { Component } from "react";

class NewUser extends Component {
    render() {
        return (
            <div>
                <form action='http://localhost:5000/NewMember' method='post'>
                <fieldset>
                <legend>Nouvel utilisateur</legend>
                    <label>
                        Pseudo
                    </label>
                    <input type='text' name='pseudo' />
                    <br></br>
                    <label>
                        Date de naissance
                    </label>
                    <input type='date' name='birth' />
                    <br></br>
                    <label>
                        Adresse mail
                    </label>
                    <input type='mail' name='email' />
                    <br></br>
                    <label>
                        Mot de passe
                    </label>
                    <input type='text' name='password' />
                    <br></br>
                    <label>
                        Numéro de téléphone
                    </label>
                    <input type='text' name='phone_number' />
                    <br></br>

                    <a href="/login">Déjà inscrit ? Se connecter</a>
                    <br></br>
                    <input type='submit' value="S'inscrire" />
                    </fieldset>
                </form>


            </div>
        )

    }
}

export default NewUser