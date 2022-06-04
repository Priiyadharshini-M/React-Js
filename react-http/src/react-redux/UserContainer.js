import React,{useEffect} from "react";
import {connect} from 'react-redux';
import { fetching } from "./Users/UserAction";

function UserContainer({userData,userFetch}) //from mapStateToProps and mapDispatchToProps
{
    useEffect(()=>{
        userFetch()
    },[userFetch])
    return(
        userData.loading ? //1st condition
        (<h3>Loading...</h3>) : //if 1st condition true
        userData.error ? //if 1st condition false 2nd condition
        (<h2>{userData.error}</h2>) : //if 2nd condition true
        (<div>
            <h3>User's Title List</h3>
            <div>{
                userData && userData.users && userData.users.map(i=> <p>{i.title}</p>) //users from payload is used here
                }</div>
        </div>)
        // <div>
        //     User's Titles
        // </div>
    )
}

const mapStateToProps=state=>
{
    return{
        userData:state.user
    }
}
const mapDispatchToProps=dispatch=>
{
    return{
        userFetch:()=>dispatch(fetching())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserContainer)