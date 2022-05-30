import React, { useEffect, useState } from "react";
function UseEffect()
{
    const[x,setX]=useState(0)
    const changeEvent=(event)=>
    {
        console.log("change event")
        setX(event.clientX)
    }
    useEffect(()=> //useEffect takes 2nd parameter which is an empty array
    {
       console.log("useEffect"); //useEffect gets executed only at initial render
       window.addEventListener("mousemove",changeEvent)

       return ()=> //return a function to unmount component
       {
           console.log("Component unmounted")
           window.removeEventListener("mousemove",changeEvent)
       }
    },[])

    return(<div>
        <p>X - {x}</p>
    </div>)
}
export default UseEffect