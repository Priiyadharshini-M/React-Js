import React, { useEffect, useState } from "react";
function UseEffect()
{
    const [count,changeCount] = useState(0)
    const[name,changeName]=useState('')
    const[x,setX]=useState(0)


    // useEffect(()=> //useEffect takes parameter which is a function--> arrow func here
    // {
    //     console.log("Updated title")
    //     document.title="Clicked it "+count+" times" //useEffect gets executed after every render of component
    // })


    //CONDITIONALLY RUNNING USEEFFECT:
    // useEffect(()=> //useEffect takes 2nd parameter here which is an array
    // {
    //     console.log("Updated title");
    //     document.title="Clicked it "+count+" times" //here useEffect gets executed after only render of components that mentioned in the array of UseEffect()
    // },[count]) //here array only watches for the change of count value


    //RUN EFFECTS ONLY ONCE
    const changeEvent=(event)=>
    {
        console.log("change event")
        setX(event.clientX)
    }
    useEffect(()=> //useEffect takes 2nd parameter which is an empty array
    {
       console.log("useEffect"); //useEffect gets executed only at initial render
       window.addEventListener("mousemove",changeEvent)
    },[])

    return(<div>
        <input type="text" value={name} onChange={event=>changeName(event.target.value)}></input>
        <button onClick={()=> changeCount(count+1)}>Clicked {count} times</button>
        <p>X - {x}</p>
    </div>)
}
export default UseEffect