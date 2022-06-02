import React,{useReducer,useEffect} from 'react';
import axios from 'axios';

const initialState={ //initialize 3 needed states
    loading:true,
    error:'', 
    post:[]
}
const reducer_func=(state,action)=>
{
    switch(action.type)
    {
        case 'Success':
            return {
                loading:false,
                error:'',
                post:action.payload
            }
        case 'Fail':
            return {
                loading:false,
                post:{},
                error:'Something went wrong!!!'
            }
        default:
            return state
    }
}
function FetchDataReducer()
{
    const [state,dispatch]=useReducer(reducer_func,initialState)

    useEffect(()=>
    {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res=>{
            dispatch({type:'Success',payload:res.data})
        })
        .catch(error=>{
            dispatch({type:'Fail'})
        })
    },[])
    return(
        <div>
            {state.loading? 'Document Loading': <ul>
            {
                state.post.map(p=><li key={p.id}>{p.title}</li>)
            }
            </ul>}
            {state.error? state.error : null}
        </div>
    )
}
export default FetchDataReducer