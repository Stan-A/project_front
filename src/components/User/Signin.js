import React, { Component } from "react";

class Login extends Component {
    render() {
        return (
            <div>
                <form action='http://localhost:5000/submit-login' method='post'>
                    <label>
                        Adresse mail
                    </label>
                    <input type='mail' name='email' />
                    <label>
                        Mot de passe
                    </label>
                    <input type='text' name='password' />
                    

                    <a href="/">Mot de passe oublié ?</a>
                    <input type='submit' value="Se connecter" />
                    <a href="http://localhost:3000/inscription">Pas de compte ? S'inscrire</a>
                </form>

            </div>
        )

    }
}

export default Login