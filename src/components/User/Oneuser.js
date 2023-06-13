import React, {useEffect, useState} from 'react'

import axios from 'axios'

function OneUser() {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [user, setUser] = useState({});

    useEffect(()=>{
        axios.get('http://localhost:5000/users/'+ params.id)
        .then((response)=>{
            setLoading(false);
            setError('')
            setUser(response.data)
        })
        .catch((error)=>{
            setLoading(false)
            setError(error)
            setUser()
        });
    })


  return (
    <div>
       <h1>
        {loading ? 'Loading...' : user.pseudo}
        </h1>
        <br/>
        {loading ? 'Loading...' : user.email}
        <br/>
        {loading ? 'Loading...' : user.password}
        <br/>
        <Link to='/edituser'>Modifier le profil</Link>*
        <br/>
        <Link to='/deleteuser'>Supprimer le profil</Link>
        
    </div>
  )
}

export default OneUser