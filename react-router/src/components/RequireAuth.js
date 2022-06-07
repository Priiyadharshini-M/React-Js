//to let know whether the user can access without loggin in or it is protected(i.e only access when logged in)

import { Navigate, useLocation} from "react-router-dom"
import { useAuth } from "./Auth"

export const RequireAuth=({children})=>{
    const auth=useAuth()
    const location=useLocation()
    // const navigate=useNavigate() --->can't use useNavigate() while rendering the component first time...used only for side effects(i.e in already rendered page) 
    if(!auth.user){
        //return navigate('/login')
        return <Navigate to='/login' state={{path : location.pathname}}/>
        //make use of this in the login component
    }
    return children
}