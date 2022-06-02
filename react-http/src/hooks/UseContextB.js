import React, { useContext } from "react";
import UseContextC from "./UseContextC"
import {Name,Clg} from './UseContext'

function UseContextB()
{
    const user=useContext(Name)
    const college=useContext(Clg)

    return(
        <div>
            {user} is studying in college {college}
            <UseContextC />
        </div>
    )
}
export default UseContextB