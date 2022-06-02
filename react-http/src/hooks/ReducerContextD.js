import React,{useContext} from 'react';
import { CountContext } from './ReducerContext';

function ReducerContextD()
{
    const context=useContext(CountContext)
    return(
        <div>
            Count From D - {context.state}
            <button onClick={()=>context.dispatch('increase')}> Increment</button>
            <button onClick={()=>context.dispatch('decrease')}>Decrement</button>
            <button onClick={()=>context.dispatch('reset')}>Reset</button>
        </div>
    )
}
export default ReducerContextD