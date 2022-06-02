import React, { useEffect, useRef, useState } from "react";
function UseRef2()
{
    const[time,setTime]=useState(0)
    const intervalRef=useRef(null)
    useEffect(()=>
    {
        intervalRef.current=setInterval(()=>{ //componentDidMount
            setTime(time+1)
        },1000)
        return()=> //ComponentWillUnmount
        {
            clearInterval(intervalRef.current) //clearing the timer according to the reference it stored and not using the variable
        }
    },[time])
    return(
        <div>
            Timer - {time}
            {/* <button onClick={()=>clearInterval(interval)}>Stop timer</button> //it shows interval is not defined as it is only inside useEffect hook...
            to overcome this we use useRef hook to directly access the DOM node */}
            <button onClick={()=>clearInterval(intervalRef.current)}>Stop timer</button>
        </div>
    )
}
export default UseRef2