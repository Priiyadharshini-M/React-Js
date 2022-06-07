import { useNavigate } from "react-router-dom"
import { useAuth } from "./Auth"

export const Profile=()=>
{
    const auth=useAuth()
    const navigate=useNavigate()

    const handleLogout=()=>
    {
        auth.logout()  
        navigate('/') //after log out we redirect user to home page
    }
    return(
        <div>Profile page
            <p>Welcome {auth.user}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}