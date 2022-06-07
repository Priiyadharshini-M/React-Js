import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";

export const Login=()=>{
    const [user,setUser]=useState('')
    const auth=useAuth()
    const navigate=useNavigate()
    const location=useLocation()

    const redirectPath=location.state?.path || '/' 

    const handleLogin=()=> //within this func we need to call login func from auth context
    {
        auth.login(user) //once user ids set then navigate to home page using useNavigate hook
        navigate(redirectPath,{replace:true})
    }

    return(
        <div>
            <label>
                Username :
                <input type="text" onChange={event=>setUser(event.target.value)} />
            </label>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}