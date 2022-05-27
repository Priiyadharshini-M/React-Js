import React from 'react'
import Person from './Person'
function ListRender(){
    //let names=["Sherlin","Lithesh","Evangeline"] //for array
    let persons=[{
        id:1,
        name:"Priiya",
        age :"22",
        college:"SKCET"
    },
    {
        id:2,
        name:"Rahul",
        age :"24",
        college:"MCT"
    },
    {
        id:3,
        name:"Ravi",
        age :"21",
        college:"KCT"
    },
    {
        id:4,
        name:"Dharshini",
        age :"20",
        college:"PSG"
    }]
    let list2=persons.map((prsn)=>
    <Person key={prsn.id} personprop={prsn} />) //passing obj prsn as props to attribute personprop
    //each child in a list should have unique "key" prop!!! -->but it can't be accessed in child component Person.js
    // let list3=names.map((name,index)=>
    //     <h3 key={index}>{index} {name}</h3>
    // )  //for array
     return (<div>{list2}</div>)
}
export default ListRender;