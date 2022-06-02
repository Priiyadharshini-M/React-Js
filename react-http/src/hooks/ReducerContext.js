import React,{useReducer} from 'react';
import ReducerContextA from './ReducerContextA'
import ReducerContextB from './ReducerContextB'
import ReducerContextC from './ReducerContextC'

export const CountContext=React.createContext() //create a context and export it

const initialState=0
const reducer_func=(currentState,action)=>
{
    switch(action)
    {
        case 'increase':
            return currentState+1 
        case 'decrease':
            return currentState-1
        case 'reset':
            return initialState
        default:
            return currentState
    }
}
function ReducerContext()
{
    const [newState,dispatch]=useReducer(reducer_func,initialState) //the dispatch method is defined in particular nested child components
     return(
         <CountContext.Provider value={{state:newState,dispatch:dispatch}}> {/* //set the value to context */}

        <div>
            Count - {newState}  {/* //state of count(i.e newState) is common and accessible for all the consumer components and its child which wrapped inside provider*/}
            <ReducerContextA></ReducerContextA>
            <ReducerContextB></ReducerContextB>
            <ReducerContextC></ReducerContextC>
        </div>
        </CountContext.Provider>
    )
}
export default ReducerContext