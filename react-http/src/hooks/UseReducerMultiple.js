//it has many counters with same state transition--so multiple UseReducer to avoid code repeating 
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
function UseReducerMultiple()
{
    const [newState,dispatch]=useReducer(reducer_func,initialState) //useReducer returns 2 values new state and dispatch method
    const [newState2,dispatch2]=useReducer(reducer_func,initialState)//another useReducer with same parameters because same function to perform
     return(
        <div>
            Count - {newState} 
            <button onClick={()=>dispatch('increase')}> Increment</button> {/*//dispatch method has the action to specify */}
            <button onClick={()=>dispatch('decrease')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
            <div>
            Count - {newState2} 
            <button onClick={()=>dispatch2('increase')}>Increment counter 2</button> {/*//dispatch method has the action to specify */}
            <button onClick={()=>dispatch2('decrease')}>Decrement counter 2</button>
            <button onClick={()=>dispatch2('reset')}>Reset counter 2</button>
            </div>
        </div>
    )
}
export default UseReducerMultiple