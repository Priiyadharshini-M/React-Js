import React from "react";
const func_comp = (props)=>{
  //console.log(props);
  //props.name="Ravi" ==> props are immutable
    return(
        <div className="func">
   <h4>Welcome {props.name} and your ID is {props.studId}</h4>
   and belong to {props.children}</div>
    )

// return React.createElement( //without using JSX
//     'div',
//     {id:'func1',className='func'},
//     React.createElement('h1',null,'Functional Component')
// )
  }
export default func_comp