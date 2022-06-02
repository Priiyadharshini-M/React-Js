import React,{useReducer} from 'react';

const initialState={
    firstCounter:0, //state as an obj here to have multiple states
    secondCounter:10
}
const reducer_func=(currentState,action)=>
{
    switch(action.type)
    {
        //...currentState-->to copy the old states of both first and second counter
        case 'increase':
            return {...currentState,firstCounter:currentState.firstCounter+action.value} //returns a new state for firstCounter according to value specified
        case 'decrease':
            return {...currentState,firstCounter:currentState.firstCounter-action.value}

            case 'increase2':
            return {...currentState,secondCounter:currentState.secondCounter+action.value} //returns a new state for secondCounter 
        case 'decrease2':
            return {...currentState,secondCounter:currentState.secondCounter-action.value}

        case 'reset':
            return initialState
        default:
            return currentState
    }
}
function UseReducerObj()
{
    const [newState,dispatch]=useReducer(reducer_func,initialState) //useReducer returns 2 values new state and dispatch method
     return(
        <div>
            Count - {newState.firstCounter} 
            <button onClick={()=>dispatch({type:'increase',value:1})}> Increment</button> {/*//dispatch method has the action to specify */}
            <button onClick={()=>dispatch({type:'decrease',value:1})}>Decrement</button>
            <button onClick={()=>dispatch({type:'increase',value:5})}> Increment by 5</button> {/*//dispatch method has the action to specify */}
            <button onClick={()=>dispatch({type:'decrease',value:5})}>Decrement by 5</button>
            
            <div>
                Second counter count - {newState.secondCounter}
                <button onClick={()=>dispatch({type:'increase2',value:1})}> Increment</button> {/*//dispatch method has the action to specify */}
                <button onClick={()=>dispatch({type:'decrease2',value:1})}>Decrement</button>
            </div>

            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        </div>
    )
}
export default UseReducerObj