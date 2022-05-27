import React,{Component} from "react";
class Refss extends Component
{
    constructor()
    {
        super()
        this.RefName=React.createRef()
        // this.CbRef=null //callback ref --->old method
        // this.setCbRef=(element)=>
        // {
        //     this.CbRef=element
        // }
    }
    clickHandle=()=>
    {
        alert("Welcome "+this.RefName.current.value)
    }
    focusInput()
    {
        this.RefName.current.focus()
    }
    // componentDidMount()
    // {
    //     // if(this.CbRef)
    //     // {
    //     //     this.CbRef.focus()
    //     // }
    //     console.log(this.RefName);
    //     this.RefName.current.focus()
    // }
    render()
    {
        return(<div>
            <label>Name : </label>
            <input type="text" ref={this.RefName} />
            {/* <input type="text" ref={this.setCbRef} /> */}
            <button onClick={this.clickHandle}>Greet me</button>
        </div>)
    }
}
export default Refss