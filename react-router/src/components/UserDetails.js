import { useParams } from "react-router-dom";
const UserDetails=()=>
{
    const param=useParams(); //param has the obj (here obj key is id of users)
    const userId=param.id; //here id is from param :id from rout in app.js
    return(
        <div>
            User details - {userId}
        </div>
    )
}
export default UserDetails