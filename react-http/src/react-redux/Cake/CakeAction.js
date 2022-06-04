import {BUY_CAKE} from './CakeType'
const buyCake=(num=1)=>  //returns action ---action creator
{
    return {
        type: BUY_CAKE,
        payload:num //make use of this in reducer
    }
}
export default buyCake