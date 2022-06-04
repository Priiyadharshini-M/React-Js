const initialState={
    noOfIce:40
}
const iceReducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case "BUY_ICE":
            return{
                ...state,
                noOfIce:state.noOfIce-1
            }
            default:
                return state
    }
}
export default iceReducer