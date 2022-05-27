import React,{Component} from "react"
import HigherOrder from "./HigherOrder";
class CountHover extends Component{
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
        const {count,ClickHandle}=this.props;
        return(<div onMouseOver={ClickHandle}>Hovered {count} times</div>)
    }
}
export default HigherOrder(CountHover,10)