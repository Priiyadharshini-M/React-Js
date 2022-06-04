import { combineReducers } from "redux"
import cakeReducer from "./Cake/CakeReducer"
import iceReducer from "./Icecream/IceReducer"
import UserReducer from './Users/UserReducer'

const rootReducer=combineReducers({ //combine reducers
    cake:cakeReducer,
    ice:iceReducer,
    user:UserReducer
})

export default rootReducer