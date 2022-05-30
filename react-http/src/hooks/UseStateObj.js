import React,{useState} from 'react';

function UseStateObj()
{
    let [name,setName]=useState({first:"",last:""})
    let [list,setList]=useState([])
    const addList=(event)=>
    {
        event.preventDefault()
        console.log(name.first)
        setList([...list,{
            id:list.length,
            value:name.first+name.last
        }])
    }
    return(
        <form>
            <input type="text" value={name.first} onChange={event=>setName({...name,first:event.target.value})}></input> {/*//to make it a controlled component(i.e to make a copy of already made changes--->spread the name and overwrite again) */}
            <input type="text" value={name.last} onChange={event=>setName({...name,last:event.target.value})}></input>
            <h3>First name : {name.first}</h3>
            <h3>Last name : {name.last}</h3>
            <button onClick={addList}>Add to List</button>
            <ul>
                {
                list.map(lis=>(
                    <li key={lis.id}>{lis.value}</li>
                ))
                }
            </ul>
        </form>
    )
}
export default UseStateObj