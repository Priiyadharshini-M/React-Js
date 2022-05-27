import React from "react";
//no state involved here so use simple functional component
let Child=(props)=>
{
    return(
        <button onClick={()=>props.eventhandler('SKCET')}>Greet me</button> //access method using props object here
    )
}
export default Child