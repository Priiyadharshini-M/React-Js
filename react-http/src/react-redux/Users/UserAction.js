import { FETCH,SUCCESS,FAIL } from "./UserTypes"
import axios from 'axios';

export const fetchRequest=()=> //action creators returns action
{
    return{
        type:FETCH
    }
}
export const fetchSuccess=(users)=>
{
    return{
        type:SUCCESS,
        payload:users
    }
}
export const fetchFail=(error)=>
{
    return{
        type:FAIL,
        payload:error
    }
}

export const fetching=()=> //action creator--> but it returns function and not obj using redux-thunk
{
    return(dispatch=>
        {
            dispatch(fetchRequest())
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res=>{
            const userss=res.data
            dispatch(fetchSuccess(userss))
        })
        .catch(error=>{
            const err=error.message
            dispatch(fetchFail(err))
        })
        })
}