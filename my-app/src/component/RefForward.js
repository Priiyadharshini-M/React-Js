import React from "react";
const RefForward=React.forwardRef((props,ref)=> //receives ref from parent component
{
    return(
        <div>
            <label>Number </label>
            {/* and attaches the received ref to native input element */}
            {/* the child element is forwarding this reference */}
            <input type="number" ref={ref} /> 
        </div>
    )
})
export default RefForward