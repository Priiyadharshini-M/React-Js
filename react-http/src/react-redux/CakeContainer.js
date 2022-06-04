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

const mapStateToProps= state=> //takes redux state as parameter
{
    return{
        noOfCakes:state.cake.noOfCakes  //then use as props in our component
        //for complex things use selectors,,,use state.ice.noOfCake as it has root reducer key value of cake
    }
}

const mapDispatchToProps= dispatch=>
{
    return{
        buyCake:()=>dispatch(buyCake())
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (CakeContainer)