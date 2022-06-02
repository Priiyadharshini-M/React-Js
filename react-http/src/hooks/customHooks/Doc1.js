import React, { useState } from "react";
import useDocTitle from "./useDocTitle";
function Doc1()
{
    const[titlecount,setTilecount]=useState(0)

   useDocTitle(titlecount) //our custom hook with count value as parameter

    return(
        <button onClick={()=>setTilecount(titlecount+1)}>Count - {titlecount}</button>
    )
}
export default Doc1