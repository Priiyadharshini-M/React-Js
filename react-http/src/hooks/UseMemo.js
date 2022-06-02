import React,{useState,useMemo} from 'react';

function UseMemo()
{
    const [count1,setCount1]=useState(0)
    const [count2,setCount2]=useState(0)

    const increase1=()=>
    {
        setCount1(count1+1)
    }
    const increase2=()=>
    {
        setCount2(count2+1)
    }

    const isEven=useMemo(()=>
    {
        let i=0;
        while(i<2000000000) {i++}
        return count1 % 2===0
    },[count1])
    // const isEven=()=>
    // {
    //     let i=0;
    //     while(i<2000000000) {i++}
    //     return count1 % 2===0
    // }

    return(
        <div>
            <div>
                <button onClick={increase1}>Increase counter 1 - {count1}</button>
                <span>{isEven? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={increase2}>Increase counter 2 - {count2}</button>
            </div>
        </div>
    )
}
export default UseMemo