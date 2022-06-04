import React from "react";
import {useSelector,useDispatch} from 'react-redux'; //similar to mapStateToProps
import buyCake from "./Cake/CakeAction";

function HooksCakeContainer()
{
    const numOfCakes=useSelector(state=> {return state.cake.noOfCakes})
    const dispatchh=useDispatch() //dipatchh variavle stores ref of dispatch fun from redux store
    return(
        <div>
            <h3>Hooks - Number of cakes - {numOfCakes}</h3>
            <button onClick={()=>dispatchh(buyCake())}>Buy Cake</button>
        </div>
    )
}
export default HooksCakeContainer