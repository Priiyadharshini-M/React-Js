import React,{useState} from "react";
function UseStateArray()
{
    let [numbers,setNumbers]=useState([])//declare useState with empty array
    
    const addNumber=()=>
    {
        setNumbers([...numbers,{
            id:numbers.length, //for unique id
            value:Math.random()
        }])
    }
    return(<div>
        <button onClick={addNumber}>Add a number</button>
        <ul>
            {numbers.map(num=>(
                <li key={num.id}>{num.value}</li>
            ))}
        </ul>
    </div>)
}
export default UseStateArray