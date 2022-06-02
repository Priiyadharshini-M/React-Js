import React from "react";
import buyCake from "./Cake/CakeAction";
import {connect} from 'react-redux';

function CakeContainer(props)
{
    return(
        <div>
            <h4>Number of cakes - {props.noOfCakes}</h4>
            <button onClick={props.buyCake}>Buy cake</button>
        </div>
    )
}

const mapStateToProps= state=>
{
    return{
        noOfCakes:state.noOfCakes  //for complex things use selectors
    }
}

const mapDispatchToProps= dispatch=>
{
    return{
        buyCake:()=>dispatch(buyCake())
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (CakeContainer)