import React,{Component} from "react";
import HigherOrder from "./HigherOrder";
class CountClick extends Component{
    // constructor()
    // {
    //     super()
    //     this.state={
    //         count:0
    //     }
    // }
    // ClickHandle=()=>
    // {
    //     this.setState(prev=>({
    //         count : prev.count+1
    //     }))
    // // this.setState({
    // //     count:this.state.count+1
    // // })
    // }
    render()
    {
        const {count,ClickHandle,name}=this.props;
        return(<button onClick={ClickHandle}>{name} Clicked {count} times</button>)
    }
}
export default HigherOrder(CountClick,5)