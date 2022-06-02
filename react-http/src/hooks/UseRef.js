import React ,{useRef,useEffect}from 'react';
function UseRef()
{
    const inputRef=useRef(null)//create useref with initial value null

    useEffect(()=>
    {
        //focus input element
        inputRef.current.focus()
    },[])//should render only once so []
    return(
        <div>
            <input type="text" ref={inputRef}/>
            {/* pass ref to input field with attribute ref  */}
        </div>
    )
}
export default UseRef