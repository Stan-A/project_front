import React from "react";
import { useParams } from "react-router-dom";

function DeleteUser() {
    const params = useParams()

    return (
        <div>
            <form action={`http://localhost:5000/user/delete/${params.id}?_method=DELETE`} method='post'>
                <input type="hidden" name="_method" value="delete" />

                <input type='submit' value='delete_user' />

                
            </form>
        </div>
    )
}

export default DeleteUser
