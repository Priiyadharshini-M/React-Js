import React from "react";
import buyIce from "./Icecream/IceAction";
import {connect} from 'react-redux';

function IceContainer(props)
{
    return(
        <div>
            <h4>Number of icecreams - {props.noOfIce}</h4>
            <button onClick={props.buyIce}>Buy Icecream</button>
        </div>
    )
}

const mapStateToProps= state=>
{
    return{
        noOfIce:state.ice.noOfIce  //for complex things use selectors,,,use state.ice.noOfIce as it has root reducer key value of ice
    }
}

const mapDispatchToProps= dispatch=>
{
    return{
        buyIce:()=>dispatch(buyIce())
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (IceContainer)