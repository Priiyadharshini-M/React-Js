import React, { useEffect, useState } from "react";
import axios from 'axios'

function FetchData()
{
    // const [post,setPost]=useState([]) //every obj
    const [post,setPost]=useState({}) //for one obj
    const[id,setId]=useState(1)
    const[idFromButton,setIdFromButton]=useState(1)//for only one obj using from button


    const handleClick=()=>
    {
        setIdFromButton(id)
    }

    useEffect(()=>
    {
        // axios.get('https://jsonplaceholder.typicode.com/todos') //for retrieving every obj
        // axios.get('https://jsonplaceholder.typicode.com/todos/'+idFromButton) //for retrieving only one obj
        axios.get('https://jsonplaceholder.typicode.com/todos/'+idFromButton)//for retrieving only one obj using from button
        .then(res=> 
            {console.log(res)
            setPost(res.data)
            })
            .catch(err=>console.log(err))
    },[idFromButton])
    return(
        <div>
            <input type="text" value={id} onChange={event=>setId(event.target.value)}></input>
            <button onClick={handleClick}>Get result</button>
            <div>
                {post.title}
            </div>
            {/* <ul>
            {
                post.map(p=><li key={p.id}>{p.title}</li>)
            }
            </ul> */}
        </div>
    )
}
export default FetchData