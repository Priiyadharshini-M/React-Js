import React from "react";
function Person({personprop})//destructure props from ListRender.JS
{
    return(
        <div>
            <h1>{personprop.name} is from {personprop.college} and is {personprop.age} years old...</h1>
        </div>
    )
}
export default Person