import React from "react";
function MemoComp({name}) //destructuring name attribute from props
{
    console.log("Memo Component");
    return(
        <div>
            {name}
        </div>
    )
}
export default React.memo(MemoComp)