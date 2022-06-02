const redux=require('redux')
const createStore=redux.createStore //redux store
const applyMiddleware=redux.applyMiddleware
const thunkMiddleware=require('redux-thunk').default //redux-thunk middleware
const axios=require('axios')

const initialState={ //state
    loading:false,
    users:[],
    error:''
}

const FETCH="FETCH" //actions
const SUCCESS="SUCCESS"
const FAIL="FAIL"
const fetchRequest=()=> //action creators
{
    return{
        type:FETCH
    }
}
const fetchSuccess=(users)=>
{
    return{
        type:SUCCESS,
        payload:users
    }
}
const fetchFail=(error)=>
{
    return{
        type:FAIL,
        payload:error
    }
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
    }
}

const fetchingUsers=()=> //
{
    return function(dispatch){
        dispatch(fetchRequest())
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res=>{
            const userss=res.data.map(lis=>lis.id)
            dispatch(fetchSuccess(userss))
        })
        .catch(error=>{
            dispatch(fetchFail(error.message))
        })
    }
}

const store=createStore(reducer,applyMiddleware(thunkMiddleware))//redux store with reducer and middleware as parameter
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchingUsers())