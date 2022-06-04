import React from "react";
import {connect} from 'react-redux';
import buyCake from "./Cake/CakeAction";
import buyIce from "./Icecream/IceAction";
function MapStateToProp(props)
{
    return(
        <div>
            <h2>Item - {props.item}</h2>
            <button onClick={props.buyItem}>Buy Item</button>
        </div>
    )
}

const mapStateToPropssss=(state,ownProps)=>
{
    const itemState=ownProps.cake ? //to chech if the given prop(i.e own-props from this component itself) is cake or not
    "cake-"+state.cake.noOfCakes+" available" : //if true print cake count
    "IceCream-"+state.ice.noOfIce+" available"  //if false print ice count

    return {
        item:itemState //mapStateToProps always return an obj
    }
}

const mapDispatchToProps=(dispatch,ownProps)=>
{
    const dispatchfunc=ownProps.cake ?
    ()=>dispatch(buyCake()) :
    ()=>dispatch(buyIce())

    return {
        buyItem:dispatchfunc
    }
}

export default connect(mapStateToPropssss,mapDispatchToProps)(MapStateToProp)

//if we need to connect only mapDispatchToProps and not stateToProps then give 1st arg as null !!!