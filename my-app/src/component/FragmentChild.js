import React from "react";
function FragmentChild()
{
    return(
        <React.Fragment>
            {/* <td></td>-->can't be child of div tag error occurs in console */}
            <td>Topics</td> 
            <td>Description</td>
        </React.Fragment>
    )
}
export default FragmentChild