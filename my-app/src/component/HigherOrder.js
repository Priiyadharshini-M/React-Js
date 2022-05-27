import React,{Component} from "react";
const HigherOrder=(OriginalComp,increamentNumber)=>
{
    class Higher extends Component{
        constructor()
    {
        super()
        this.state={
            count:0
        }
    }
    ClickHandle=()=>
    {
        this.setState(prev=>({
            count : prev.count+increamentNumber
        }))
    // this.setState({
    //     count:this.state.count+1
    // })
    }
    render()
    {
        return(<OriginalComp count={this.state.count} ClickHandle={this.ClickHandle} {...this.props}/>)
        // ...this.props==>inherit properties from parent Component becacuse if not used this props get passed to hoc alone and not to respective child Component
    }
    }
    return Higher
}
export default HigherOrder