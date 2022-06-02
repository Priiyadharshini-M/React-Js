const redux=require('redux')
const reduxLogger=require('redux-logger') //logger middleware
 
const createStoree=redux.createStore//create redux store
const combineReducers=redux.combineReducers//to combine multiple reducers to single so to pass in createStore
const logger=reduxLogger.createLogger()//middleware

function buyCake(){ //action creater function --->it returns an action
    return{
        type:"BUY_CAKE", //action obj with type property
        info:"first action"
    }
}
function buyIce(){ 
    return{
        type:"BUY_ICE"
     }
}

//(previousState,action)===>returns newState-->reducer
// const initialState={
//     noOfCakes:10,
//     noOfIce:20
// }
const cakeInitial={
    noOfCakes:10
}
const iceInitial={
    noOfIce:20
}


// const reducer=(state=initialState,action)=>
// {
//     switch(action.type)
//     {
//         case "BUY_CAKE":
//             return {
//                 ...state, //first make copy of the state obj, so if there are other properties then only they will remain unchanged
//                 noOfCakes : state.noOfCakes-1} //not mutating the state obj, we are returning the new obj
//         case "BUY_ICE":
//             return{
//                 ...state,
//                 noOfIce : state.noOfIce-1}
//         default:
//             return state
//     }
// }
const Cakereducer=(state=cakeInitial,action)=> //multiple reducers
{
    switch(action.type)
    {
        case "BUY_CAKE":
            return {
                ...state, //first make copy of the state obj, so if there are other properties then only they will remain unchanged
                noOfCakes : state.noOfCakes-1} //not mutating the state obj, we are returning the new obj
        default:
            return state
    }
}
const Icereducer=(state=iceInitial,action)=> //multiple reducers
{
    switch(action.type)
    {
        case "BUY_ICE":
            return{
                ...state,
                noOfIce : state.noOfIce-1}
        default:
            return state
    }
}

const rootReducer=combineReducers({ //combine reducers
    cake:Cakereducer,
    ice:Icereducer
})

const store=createStoree(rootReducer,redux.applyMiddleware(logger)) //creating redux store....holds state
console.log("Initial state ",store.getState())
const unsubscribe=store.subscribe(()=>
{
    // console.log('Updated State ',store.getState()) --->console log not needed beacuse function done by logger middleware
})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIce())
store.dispatch(buyIce())
unsubscribe()