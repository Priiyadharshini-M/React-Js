import React from 'react';
function Button(props)
{
    const{event,children}=props //destructuring
    console.log("Rendering "+children);
    return(
        <button onClick={event}>
            {children}
        </button>
    )
}
export default React.memo(Button)