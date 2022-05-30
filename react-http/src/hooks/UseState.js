import React, { useState } from "react";
function UseState()
{
    const [count,changeCount] = useState(0)//array destructure //usestate gets initial value as 0 to count and gives current value to changeCount

    function changeIncrease5()
{
    for(let i=0;i<5;i++){
    changeCount((prev)=>prev+1)
    }
}
    return(<div>
        Count : {count}
        <button onClick={()=> changeCount(count+1)}>Increase by 1</button>
        <button onClick={()=> changeCount(count-1)}>Decrease by 1</button>
        <button onClick={()=> changeCount(0)}>Reset</button> {/* //but these are no correct, we should use previous value as given below */}
        <button onClick={()=> changeIncrease5(count+1)}>Increase by 5</button>
    </div>)
}
export default UseState