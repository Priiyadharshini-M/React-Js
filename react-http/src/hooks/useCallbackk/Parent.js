import React,{useState,useCallback} from 'react';
import Title from './Title';
import Count from './Count';
import Button from './Button';
 function Parent()
 {
     const [age,setAge]=useState(21)
     const [salary,setSalary]=useState(10000)

     const increaseAge=useCallback(()=>
     {
         setAge(age+1) //useCallback accepts func as 1st arg and dependency as 2nd arg--->func renders only if age value changes
     },[age])
     const increaseSalary=useCallback(()=>
     {
         setSalary(salary+1000) //func renders only if salary value changes
     },[salary])

     return(
         <div>
             <Title />
             <Count text="Age" count={age}/>
             <Button event={increaseAge}>Increase Age</Button>
             <Count text="Salary" count={salary}/>
             <Button event={increaseSalary}>Increase Salary</Button>
         </div>
     )
 }
 export default React.memo(Parent)