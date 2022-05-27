import React from "react";
function ErrorEx({name})
{
    console.log(name)
    if(name==="Nothing"){
    throw new Error("This name is not valid")
    }
    return(<div>{name}</div>)
}
export default ErrorEx