import React, { useState } from "react";
import buyCake from "./Cake/CakeAction";
import {connect} from 'react-redux';

function NewContainer(props)
{
    const[num,setNum]=useState(0) //for input field's initial value
    return(
        <div>
            <h4>Number of cakes - {props.noOfCakes}</h4>
            <input type="text" value={num} onChange={event=>setNum(event.target.value)}></input>
            <button onClick={()=>props.buyCake(num)}>Buy cake</button> {/* //pass num as parameter to buyCake method and it corresponds to mapDispatchtoProps so change there too*/} 
        </div>
    )
}

const mapStateToProps= state=>
{
    return{
        noOfCakes:state.cake.noOfCakes  //for complex things use selectors,,,use state.ice.noOfCake as it has root reducer key value of cake
    }
}

const mapDispatchToProps= dispatch=>
{
    return{
        buyCake:(num)=>dispatch(buyCake(num))
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (NewContainer)