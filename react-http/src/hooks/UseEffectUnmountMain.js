import React,{useState} from "react";
import UseEffectUnmount from "./UseEffectUnmount";

function UseEffectUnmountMain()
{
    const [display,setDisplay]=useState(true)
    return(
        <div>
            <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
             {display && <UseEffectUnmount />} {/*visible in UI if both value is true otherwise displays nothing in UI */}
        </div>
    )
}
export default UseEffectUnmountMain