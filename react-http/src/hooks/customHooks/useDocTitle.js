import {useEffect} from "react";//no JSX so no need to import React
function useDocTitle(titlecount)
{
    useEffect(()=>
    {
        document.title="Count "+titlecount
    },[titlecount])
}
export default useDocTitle