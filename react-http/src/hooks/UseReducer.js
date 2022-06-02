import React,{useReducer} from 'react';

const initialState=0
const reducer_func=(currentState,action)=>
{
    switch(action)
    {
        case 'increase':
            return currentState+1 //returns a new state
        case 'decrease':
            return currentState-1
        case 'reset':
            return initialState
        default:
            return currentState
    }
}
function UseReducer()
{
    const [newState,dispatch]=useReducer(reducer_func,initialState) //useReducer returns 2 values new state and dispatch method
     return(
        <div>
            Count - {newState} 
            <button onClick={()=>dispatch('increase')}> Increment</button> {/*//dispatch method has the action to specify */}
            <button onClick={()=>dispatch('decrease')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
            <button onClick={()=>dispatch('helloo')}>Do nothing</button> {/*//this is for default action as action helloo is not present */}
        </div>
    )
}
export default UseReducer