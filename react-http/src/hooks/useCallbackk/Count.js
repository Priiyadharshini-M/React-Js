import React from 'react';
function Count(props)
{
    const{text,count}=props //destructuring
    console.log("Rendering "+text);
    return(
        <div>
            {text} - {count}
        </div>
    )
}
export default React.memo(Count)