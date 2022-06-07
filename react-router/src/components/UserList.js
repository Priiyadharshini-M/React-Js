import { Outlet, useSearchParams } from "react-router-dom"

const UserList=()=>
{
    const [searchParam,setSearchParam]=useSearchParams() 
    const showActive=searchParam.get('filter')==='active' //to get what is present in url
    return(
        <>
        <div>
            <h4>User 1</h4>
            <h4>User 2</h4>
            <h4>User 3</h4>
        </div>
        <Outlet />
        <button onClick={()=>setSearchParam({filter:'active'})}>Active Users</button>
        <button onClick={()=>setSearchParam({})}>Rest Filter</button>

        {showActive ? (<h3>Showing active users</h3>) : (<h3>Showing all users</h3>)}
        </>

    )
}
export default UserList