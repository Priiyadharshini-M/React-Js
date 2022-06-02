//create ref in parent component...this is parent component
import React,{Component}from "react";
import RefForward from "./RefForward";
import Refss from "./Refss";
class RefInputFocus extends Component{
    constructor(){
        super()
        this.RefFocus=React.createRef()
        this.RefFocusNum=React.createRef()
    }
    focusHandle=()=>
    {
        this.RefFocus.current.focusInput() //Ref to child component from a parent component-->i.e from this comp to Refss.js
    }
    focusHandle2=()=>
    {
        this.RefFocusNum.current.focus() //--->RefForward.js
    }
    render()
    {
        return(
            <div>
        <Refss ref={this.RefFocus}></Refss>
        <button onClick={this.focusHandle}>Focus name text box</button>
        <RefForward ref={this.RefFocusNum}></RefForward>
        <button onClick={this.focusHandle2}>Focus number text box</button></div>)
    }
}
export default RefInputFocus