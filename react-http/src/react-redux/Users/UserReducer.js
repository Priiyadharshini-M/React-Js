import { FETCH,SUCCESS,FAIL } from "./UserTypes"

const initialState={ //state
    loading:false,
    users:[],
    error:''
}

const reducer=(state=initialState,action)=> //reducer
{
    switch(action.type)
    {
        case FETCH:
            return{
                ...state,
                loading:true
            }
        case SUCCESS:
            return{
                loading:false,
                users:action.payload,
                error:''
            }
        case FAIL:
            return{
                loading:false,
                users:[],
                error:action.payload
            }
        default:
            return{}
    }
}
export default reducer